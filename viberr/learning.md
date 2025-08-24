# 🧠 AI Website Builder — Technical Learning Checklist

This checklist is designed to make you a **god-tier SaaS developer** using **Next.js 15 App Router, tRPC, Prisma, PostgreSQL, TanStack Query, TailwindCSS, and shadcn/ui**.

---

## 🧠 Next.js 15 (App Router)

- ❓ What is a Server Component vs Client Component? Why are Server Components the default in Next.js 15?
- ❓ What makes a component require `'use client'`? What are the performance implications?
- ❓ What are `layout.tsx`, `page.tsx`, and `loading.tsx` files and how does Next.js auto-route them?
- ❓ What are route groups `(group)` and how do you use them to separate app/marketing/admin?
- ❓ How does `generateMetadata()` work? What’s the difference between static and dynamic metadata?
- ❓ What’s the difference between `fetch()` with `cache`, `revalidate`, and `no-store` options?
- ❓ How do you use `Suspense` and `loading.tsx` to progressively render sections of a page?
- ❓ What is a Server Action? When should you use it vs tRPC vs API routes?

---

## ⚙️ tRPC + End-to-End Typesafety

- ❓ What is tRPC and how does it eliminate REST/GraphQL overhead?
- ❓ How do you define a procedure, validate it with Zod, and auto-infer the client types?
- ❓ What is context in tRPC and how do you attach DB + auth/session data to it?
- ❓ How do you organize routers by domain (`siteRouter`, `userRouter`, etc.) and merge into `appRouter`?
- ❓ How does the tRPC client talk to `/api/trpc` and how does it batch HTTP calls?
- ❓ What is middleware in tRPC and how do you use it for protected procedures?
- ❓ What’s the difference between `query`, `mutation`, and `subscription` in tRPC?

---

## 🧾 Prisma + PostgreSQL (Data Layer)

- ❓ How do you model 1:many and many:many relationships in Prisma (e.g., User → Sites, Site → Pages)?
- ❓ What is a Prisma migration and how do you run them safely in production?
- ❓ What is `prisma.include`, `select`, and why do they matter for performance?
- ❓ What is a transaction in Prisma? When should you wrap multiple DB operations together?
- ❓ What is the N+1 problem? How do you avoid it in Prisma?
- ❓ How do you seed your database and use `prisma db seed` for dev/demo data?
- ❓ How do you enforce soft deletes (`deletedAt`) and multi-tenant safety (`userId/orgId`)?

---

## 📦 TanStack Query (Server State Management)

- ❓ What’s the difference between `useQuery` and `useMutation`?
- ❓ What is a `queryKey` and why is it important for caching?
- ❓ What is the difference between `staleTime`, `cacheTime`, and `refetchOnWindowFocus`?
- ❓ How do you invalidate a query after a mutation (`invalidateQueries`)?
- ❓ What is optimistic UI? How do you implement `onMutate → rollback → invalidate` properly?
- ❓ How do you use `useInfiniteQuery` for paginated/template galleries?
- ❓ How do you prefetch and hydrate data in RSC + client handoff?

---

## 🎨 Tailwind CSS + shadcn/ui (Component + Styling Layer)

- ❓ What is utility-first CSS? How does Tailwind use JIT compilation?
- ❓ How do you use shadcn/ui to scaffold accessible components (e.g., `Dialog`, `Select`, `Tabs`)?
- ❓ How do you theme Tailwind with CSS variables and dark mode (`.dark`)?
- ❓ How do you structure consistent spacing, typography, and layout with Tailwind?
- ❓ What’s the difference between responsive and mobile-first classes (e.g., `sm:p-4`)?
- ❓ How do you avoid z-index bugs and create a predictable stacking order?
- ❓ How do you implement animation, transitions, and `motion-safe` features?

---

## 🔐 Authentication + Authorization

- ❓ What is the difference between authentication (authN) and authorization (authZ)?
- ❓ How do you set up a session-based auth (NextAuth, Clerk, or Auth.js)?
- ❓ What is the role of cookies, tokens, and headers in `createContext()`?
- ❓ How do you build role-based auth (`admin`, `user`, `owner`) and enforce it in tRPC?
- ❓ How do you prevent users from accessing other users’ resources?
- ❓ How do you securely store sensitive env vars and use them in RSC vs client?

---

## 🧠 AI Integration Concepts

- ❓ How do you design a good prompt for generating a website layout or section?
- ❓ How do you chunk prompt steps (e.g., layout → sections → Tailwind CSS blocks)?
- ❓ How do you stream AI output to the frontend with `ReadableStream` or `Server-Sent Events`?
- ❓ How do you sanitize AI-generated HTML (e.g., DOMPurify) before rendering?
- ❓ How do you retry/fallback if the AI output is broken or invalid?
- ❓ How do you track token usage per generation and link it to a user plan?

---

## 🏗️ Builder-Specific Architecture

- ❓ How do you store blocks/components in the DB? What’s the schema?
- ❓ How do you serialize block structures to render in the preview pane?
- ❓ How do you sync the block state to the server after user actions?
- ❓ How do you show a live preview in an iframe using `postMessage` or streaming?
- ❓ How do you version site snapshots to allow rollback?
- ❓ How do you support custom HTML/CSS editing securely?

---

## 💳 Stripe Billing (SaaS Monetization)

- ❓ How do you create products/prices in Stripe?
- ❓ How do you use Stripe webhooks to listen to `checkout.session.completed` and `invoice.payment_failed`?
- ❓ How do you store user subscription status in your DB and attach it to context?
- ❓ How do you gate AI usage, site publishing, and custom domains based on plan?
- ❓ How do you offer free trials, coupons, and usage-based pricing?

---

## 🚀 DevOps & Deployment

- ❓ How do you deploy Next.js 15 with Vercel? What’s SSR vs static on Vercel?
- ❓ How do you deploy Prisma with Neon/Supabase and use pooled connections?
- ❓ How do you use environment variables securely across client/server/edge?
- ❓ How do you use `prisma generate`, `migrate deploy`, and `db push` in CI/CD?
- ❓ How do you handle image uploads (e.g., S3 pre-signed URLs or Cloudflare R2)?
- ❓ How do you monitor API performance (e.g., using LogSnag, Axiom, Sentry)?

---

## 📊 Observability & Scaling

- ❓ How do you log every tRPC request with timing, user, and payload size?
- ❓ How do you trace requests from React → tRPC → DB using OpenTelemetry?
- ❓ How do you build alerting for AI costs, API error rates, and DB slow queries?
- ❓ How do you gracefully handle errors and show retryable UI states to users?

---

## 📈 Advanced Patterns (Optional but God-Tier)

- ❓ What is cache hydration and how does it reduce time-to-interactive?
- ❓ What is `revalidatePath`, `revalidateTag`, and ISR in Next 15?
- ❓ How do you isolate tenants per custom domain (`username.sitebuilder.com`)?
- ❓ How do you queue background jobs (e.g., site publish, AI render) using something like `Pglite`, `Redis`, or `cron.ts`?
- ❓ How do you persist React Query cache across reloads (e.g., IndexedDB offline mode)?

---

## ✅ Bonus: Master-level Debugging Skills

- ❓ Can you identify whether a bug is coming from state (client), API (tRPC), DB (Prisma), or logic (prompt/AI)?
- ❓ Can you replicate production bugs with realistic seed data and test users?
- ❓ Can you explain to another dev exactly how data flows from button click → mutation → DB → cache → UI?