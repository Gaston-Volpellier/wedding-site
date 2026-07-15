'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useLocale, t } from '@/lib/i18n';
import { chatbot } from '@/lib/content';

// Must be exposed to the browser (this component runs client-side), and
// defaults to the backend's local dev port so `npm run dev` works out of
// the box once chatbot-backend is also running locally.
const API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'http://localhost:8080';

const STORAGE_KEY = 'wedding-chat-history';

type ChatMessage = {
  id: string;
  role: 'user' | 'model';
  text: string;
  // The local greeting isn't something Gemini actually said, so it's kept
  // out of the history we send back to the API.
  synthetic?: boolean;
};

function createId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

export default function Chatbot() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore a persisted conversation. Runs client-only, after the initial
  // render, so the server-rendered markup never depends on localStorage.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as ChatMessage[]) : null;
      if (parsed && parsed.length > 0) {
        setMessages(parsed);
      }
    } catch {
      // Corrupt or unavailable storage — just start fresh.
    }
    setHydrated(true);
  }, []);

  // Seed the welcome message once, only if there's no restored history.
  useEffect(() => {
    if (!hydrated) return;
    setMessages((prev) =>
      prev.length > 0
        ? prev
        : [
            {
              id: createId(),
              role: 'model',
              text: t(chatbot.welcomeMessage, locale),
              synthetic: true,
            },
          ],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage full or unavailable — conversation just won't persist.
    }
  }, [messages, hydrated]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, sending]);

  // The panel is near full-screen on mobile, so lock background scroll
  // while it's open — same trick as the mobile nav menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    // Gemini's history format, built from everything said so far.
    const historyForApi = messages
      .filter((m) => !m.synthetic)
      .map((m) => ({ role: m.role, parts: [{ text: m.text }] }));

    setMessages((prev) => [
      ...prev,
      { id: createId(), role: 'user', text: trimmed },
    ]);
    setInput('');
    setError(null);
    setSending(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history: historyForApi }),
      });

      if (!res.ok) throw new Error(`chat request failed: ${res.status}`);

      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: 'model', text: data.reply },
      ]);
    } catch {
      setError(t(chatbot.errorMessage, locale));
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const showQuickQuestions = messages.every((m) => m.synthetic) && !sending;

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(true)}
        aria-label={t(chatbot.launcherLabel, locale)}
        aria-expanded={open}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 border border-charcoal/20 bg-cream/95 backdrop-blur-md px-4 py-3 text-xs tracking-widest uppercase font-sans text-charcoal shadow-lg hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300 cursor-pointer ${
          open
            ? 'opacity-0 scale-90 pointer-events-none'
            : 'opacity-100 scale-100'
        }`}
      >
        <ChatIcon className="w-4 h-4" />
        {t(chatbot.launcherLabel, locale)}
      </button>

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(chatbot.panelTitle, locale)}
        className={`fixed z-50 flex flex-col bg-cream border border-charcoal/10 shadow-2xl transition-all duration-300 ease-out inset-x-3 top-20 bottom-3 md:inset-x-auto md:top-auto md:bottom-5 md:right-5 md:w-96 md:h-150 md:max-h-[calc(100vh-2.5rem)] ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-charcoal/10 shrink-0">
          <h2 className="font-serif text-lg text-charcoal">
            {t(chatbot.panelTitle, locale)}
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label={t(chatbot.closeLabel, locale)}
            className="text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer p-1"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-4 space-y-3"
          aria-live="polite"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 text-sm font-sans leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-charcoal text-cream'
                    : 'bg-warm-white text-charcoal border border-charcoal/10'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {sending && (
            <div className="flex justify-start">
              <div className="bg-warm-white border border-charcoal/10 px-4 py-3 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce" />
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-red-700/80 font-sans px-1">{error}</p>
          )}
        </div>

        {/* Quick questions */}
        {showQuickQuestions && (
          <div className="px-5 pb-3 flex flex-wrap gap-2 shrink-0">
            {chatbot.quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(t(q, locale))}
                className="text-xs font-sans text-taupe-dark border border-taupe/40 px-3 py-1.5 hover:bg-taupe/10 transition-colors cursor-pointer"
              >
                {t(q, locale)}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 border-t border-charcoal/10 shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t(chatbot.inputPlaceholder, locale)}
            disabled={sending}
            className="flex-1 min-w-0 bg-transparent text-sm font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none px-2 py-2"
          />
          <button
            type="submit"
            disabled={sending || !input.trim()}
            aria-label={t(chatbot.sendLabel, locale)}
            className="shrink-0 w-10 h-10 flex items-center justify-center border border-charcoal/30 text-charcoal enabled:hover:bg-charcoal enabled:hover:text-cream enabled:hover:border-charcoal transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="8" cy="12" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}
