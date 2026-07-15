# Wedding chatbot backend

A small Express API that powers the trip-planning chatbot on the wedding
website. It answers guest questions about the venue, schedule, travel, and
lodging by calling the Gemini API, and is designed to run as a container on
**Google Cloud Run**.

This is a separate deployable service from the Next.js site (which stays on
Vercel) — the two talk to each other over HTTP.

## How it works

- `POST /chat` — takes `{ message, history }`, sends it to Gemini along with
  a system instruction describing the wedding (see
  [src/systemPrompt.js](src/systemPrompt.js)), and returns `{ reply }`.
- `GET /health` — returns `200 ok`, used by Cloud Run health checks.
- CORS is locked down to a single allowed origin (your Vercel domain).
- `/chat` is rate-limited to 10 requests/minute per IP.
- A simple in-memory counter caps total `/chat` requests across all guests
  to 300/day by default (configurable), resetting at midnight server time.
  Because it's in-memory, it also resets whenever Cloud Run starts a fresh
  container instance — fine for a low-traffic wedding site.

## Running locally

```bash
cd chatbot-backend
npm install
cp .env.example .env
# edit .env and set GEMINI_API_KEY (get one at https://aistudio.google.com/apikey)
npm run dev
```

The server starts on `http://localhost:8080` (or whatever `PORT` you set).
Test it with:

```bash
curl http://localhost:8080/health

curl -X POST http://localhost:8080/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What time is the ceremony?", "history": []}'
```

`history` should be an array of prior turns in Gemini's format, e.g.:

```json
[
  { "role": "user", "parts": [{ "text": "What time is the ceremony?" }] },
  { "role": "model", "parts": [{ "text": "The ceremony starts at 2:50 PM on Saturday, September 26." }] }
]
```

The frontend is responsible for keeping track of this and sending it with
each request; the backend itself doesn't persist conversations.

## Environment variables

| Variable          | Required | Description                                                                 |
| ------------------ | -------- | ----------------------------------------------------------------------------- |
| `GEMINI_API_KEY`   | Yes      | Gemini API key. In production this comes from Secret Manager, not a `.env` file. |
| `ALLOWED_ORIGIN`   | Yes      | The single origin allowed to call this API (your Vercel site URL, e.g. `https://your-wedding-site.vercel.app`). |
| `PORT`             | No       | Port to listen on. Cloud Run sets this automatically — default is `8080` for local runs. |
| `DAILY_LIMIT`      | No       | Max total `/chat` requests served per calendar day. Defaults to `400`.       |

The server exits immediately on startup if `GEMINI_API_KEY` or
`ALLOWED_ORIGIN` is missing, so misconfiguration fails loudly instead of
silently allowing all origins or crashing on the first request.

## Deploying to Cloud Run

These steps assume you already have a GCP project set up and the `gcloud`
CLI installed and authenticated (`gcloud init`).

### 1. Store the Gemini API key in Secret Manager (one-time setup)

```bash
gcloud secrets create gemini-api-key --replication-policy="automatic"

echo -n "your-actual-gemini-api-key" | gcloud secrets versions add gemini-api-key --data-file=-
```

### 2. Deploy

Run this from inside the `chatbot-backend` directory. Cloud Run will build
the Dockerfile and deploy it, injecting the secret as an environment
variable at runtime (it's never written into the image or your source
code):

```bash
gcloud run deploy wedding-chatbot-backend \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-env-vars ALLOWED_ORIGIN=https://your-wedding-site.vercel.app \
  --set-secrets GEMINI_API_KEY=gemini-api-key:latest
```

- `--source .` tells Cloud Run to build the Dockerfile in this directory
  and push it for you — no need to build/push images manually.
- `--allow-unauthenticated` makes the endpoint publicly reachable (needed
  since guests' browsers call it directly). CORS + rate limiting +
  the daily cap are what keep it from being abused.
- `--set-secrets GEMINI_API_KEY=gemini-api-key:latest` mounts the latest
  version of the `gemini-api-key` secret as the `GEMINI_API_KEY` env var.
- Swap `europe-west1` for whichever region you prefer.

After deploying, `gcloud` prints a service URL like
`https://wedding-chatbot-backend-xxxxx.run.app` — that's what the Next.js
frontend should call.

### Updating after code changes

Re-run the same `gcloud run deploy` command — it rebuilds the image from
source and rolls out a new revision.

### Rotating the API key

```bash
echo -n "your-new-key" | gcloud secrets versions add gemini-api-key --data-file=-
gcloud run deploy wedding-chatbot-backend --source . --region europe-west1
```
