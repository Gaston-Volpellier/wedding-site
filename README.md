This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Chatbot widget

The site includes a floating chat widget (`src/components/Chatbot.tsx`) that
talks to the separate backend in [`chatbot-backend/`](chatbot-backend/) (see
that directory's README for running/deploying it).

Copy `.env.local.example` to `.env.local` and point
`NEXT_PUBLIC_CHATBOT_API_URL` at wherever that backend is running — it
defaults to `http://localhost:8080` if unset.

**Local dev gotcha:** the backend only accepts requests from the single
origin in its own `ALLOWED_ORIGIN` env var, matched exactly against what the
browser sends. If you're running both locally, start the backend with
`ALLOWED_ORIGIN=http://localhost:3000` (not its production `.env` value) or
the browser will silently block every chat request with a CORS error while
`curl` requests against it keep working fine.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
