// A small Express server that proxies chat messages to Gemini, with some
// guardrails (CORS lockdown, per-IP rate limiting, a daily request cap)
// so a public chat endpoint can't be abused.
//
// Deployed as a container on Google Cloud Run — see ../README.md.

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION } from './systemPrompt.js';

const { GEMINI_API_KEY, ALLOWED_ORIGIN } = process.env;

if (!GEMINI_API_KEY) {
  console.error('Missing required environment variable: GEMINI_API_KEY');
  process.exit(1);
}

if (!ALLOWED_ORIGIN) {
  console.error('Missing required environment variable: ALLOWED_ORIGIN');
  process.exit(1);
}

const PORT = process.env.PORT || 8080;

// How many /chat requests we'll serve in total, across all guests, per
// calendar day. This is a simple safety net against runaway Gemini usage
// costs — 400/day is plenty for a small wedding site.
const DAILY_LIMIT = parseInt(process.env.DAILY_LIMIT || '400', 10);

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const app = express();

// Cloud Run puts exactly one Google-managed proxy in front of the
// container, which sets X-Forwarded-For to the real client IP. Trusting
// just "1" hop tells Express (and express-rate-limit) to read that IP
// while still ignoring any extra values a malicious client might append
// to the header themselves. Trusting `true` (all hops) would let clients
// spoof their own IP and dodge the per-IP rate limit below.
app.set('trust proxy', 1);

app.use(express.json());

// Only allow requests from the wedding site's own domain.
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    methods: ['GET', 'POST'],
  }),
);

// ─── Daily request cap ────────────────────────────────────────────────────
// Kept in memory — simple and good enough for a low-traffic wedding site.

let dailyCounter = {
  dayKey: getDayKey(),
  count: 0,
};

function getDayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

function dailyCapMiddleware(req, res, next) {
  const todayKey = getDayKey();

  if (dailyCounter.dayKey !== todayKey) {
    dailyCounter = { dayKey: todayKey, count: 0 };
  }

  if (dailyCounter.count >= DAILY_LIMIT) {
    return res.status(429).json({
      error:
        "We've reached the chatbot's daily question limit — sorry! Please try again tomorrow, or tell Gaston not to be cheap and pay for a premium Gemini plan.",
    });
  }

  dailyCounter.count += 1;
  next();
}

// ─── Per-IP rate limiting ─────────────────────────────────────────────────
// Protects against one guest (or a bot) hammering the endpoint.

const chatRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests — chill and wait a moment before trying again.',
  },
});

// ─── Routes ────────────────────────────────────────────────────────────────

// Cloud Run (and any load balancer health check) hits this to confirm the
// container is up and serving traffic.
app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

app.post('/chat', chatRateLimiter, dailyCapMiddleware, async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'A "message" string is required.' });
    }

    // `history` should be an array of prior turns in Gemini's format:
    // [{ role: 'user' | 'model', parts: [{ text: '...' }] }, ...]
    // The frontend is responsible for keeping track of and sending this.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: Array.isArray(history) ? history : [],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message });

    res.json({ reply: response.text });
  } catch (err) {
    // Log the real error for debugging (visible in Cloud Run logs), but
    // never leak internal details back to the client.
    console.error('Error calling Gemini API:', err);
    res
      .status(500)
      .json({ error: 'Something went wrong. Please try again in a moment.' });
  }
});

// express.json() throws a SyntaxError for malformed JSON bodies. Without
// this handler, Express's default error page returns HTML with a full
// stack trace (including internal file paths) — catch it here so callers
// always get a clean JSON error instead.
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON in request body.' });
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`Wedding chatbot backend listening on port ${PORT}`);
});
