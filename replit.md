# PurpleGuard — Managed Security Services Platform

## Overview

PurpleGuard is a managed security services provider (MSSP) website serving SMEs and mid-market organizations in Egypt, UAE, and KSA. The platform offers both "Purple X" services (advanced cybersecurity — VAPT, SOC, MDR, threat intelligence) and "Managed X" services (ongoing managed infrastructure — EDR, firewall, email, backup), plus use-case solution bundles and an AI Security Advisor.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Structure

There are two coexisting applications in this repo:

### 1. `next-app/` — **Active (SSR Migration)**
The Next.js 14 App Router rebuild. This is the active webview (port 5000).
- **Workflow**: `cd next-app && node ../node_modules/.bin/next dev -p 5000`
- **Phase**: Phase 1 (Foundation) complete. Phase 2 (content pages) next.
- **Rendering**: SSR / SSG — every page returns full HTML for Google indexing.

### 2. Root (`client/` + `server/`) — **Legacy (CSR + Express)**
The original Vite + React + Express SPA. Not currently running as the webview.
- Full feature set: auth (Replit OIDC), Stripe payments, dashboard, blog, PDFs
- Kept intact for reference during migration. Features will be ported to Next.js in later phases.

---

## Active Architecture (`next-app/`)

### Frontend

**Framework**: Next.js 14 App Router with TypeScript

**Rendering Strategy**:
- Static pages (service/solution content): SSG — pre-rendered at build time
- Dynamic pages (blog posts): SSR with `generateStaticParams`
- Interactive UI (AI Advisor chat): Client Components with `"use client"`

**Routing**: Next.js file-based routing (`app/` directory)

**UI Framework**:
- Shadcn/ui components (47 components in `next-app/src/components/ui/`)
- Tailwind CSS with identical design tokens as the legacy app
- CSS variables for theming — same colour palette

**SEO**: Every page exports `generateMetadata()` with unique title, description, and Open Graph tags. `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.

### Layout

`app/layout.tsx` wraps every page with:
- `<Navigation />` — sticky top nav with hover dropdowns (Client Component)
- `<Footer />` — full 5-column footer with all service links (Server Component)
- `<WhatsAppButton />` — fixed floating CTA

### Interactive Tools

- **PurpleVAPT Sizing Calculator**: `/services/purple-x/purplevapt/calculator` — client-side pricing calculator ported from standalone HTML. All pricing logic (VA/PT annual/one-time lookup tables, IP packs, web app/AD/compliance pricing, effort breakdown, proposal mailto) lives in the page component. Layout file provides metadata + breadcrumb JSON-LD. Linked from homepage hero, PurpleVAPT hero, comparison section, delivery options, and final CTA.
- **PurpleSOC Discovery Questionnaire**: `/services/purple-x/purpleSOC/questionnaire` — interactive SOC sizing tool ported from standalone HTML. Server `page.tsx` provides metadata + breadcrumb JSON-LD and wraps the tool in the same shell as the VAPT calculator: `bg-gradient-to-b from-[#000033] via-slate-900 to-[#000033]` with radial overlay, `max-w-[1280px]` centered container, `py-12 pb-20`, and a "Back to PurpleSOC" ghost button at the top. `QuestionnaireClient.tsx` injects the original HTML body via `dangerouslySetInnerHTML` and executes the original JS (LDS/EPS/storage/pricing logic, site tabs, country multi-select, results, mailto quote) by appending a `<script>` to `document.body` in `useEffect`, with all helpers attached to `window` so inline `onclick` handlers continue to work. Styling lives entirely in `questionnaire.css`, scoped under `.pgsoc-root`, restyled to match the PurpleVAPT calculator aesthetic — site default font (no Syne/DM Sans/DM Mono), `purple-400` (#c084fc) accents, `bg-white/[0.04]` glass cards with `border-white/[0.08]` and `backdrop-blur(16px)`, `rounded-2xl` (16px) surfaces, `rounded-lg` (8px) inputs, transparent root so the page-level gradient shows through. Sidebar is now a sticky glass card alongside the main column. Linked from homepage hero ("Size my SOC"), PurpleSOC service page final CTA ("Start the discovery questionnaire"), and Footer Purple X column ("SOC Sizing Tool").

### Assets

- Logo: `next-app/public/logo.png` (copied from `attached_assets/`)
- `next-app/src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

---

## Migration Phases

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation, layout, styling, components | ✅ Complete |
| 2 | All 26 content pages (services, solutions, pricing) | ⏳ Next |
| 3 | SEO infrastructure (sitemap, robots, metadata) | ⏳ Pending |
| 4 | Supporting pages (booking, blog placeholder, AI Advisor) | ⏳ Pending |
| 5 | Whitepaper PDF downloads | ⏳ Pending |
| 6 | Blog from database | ⏳ Pending |
| 7 | Auth + dashboard + subscriptions | ⏳ Pending |

---

## Legacy Architecture (Reference)

### Frontend (CSR SPA)
- React + TypeScript + Vite
- Wouter for client-side routing
- TanStack Query for data fetching
- Authentication-conditional routing (authenticated vs public page sets)

### Backend (Express.js)
- Express with TypeScript (ESM mode)
- Replit OpenID Connect auth (Passport.js)
- RESTful `/api/*` endpoints
- PostgreSQL sessions via connect-pg-simple

### Database
- PostgreSQL (Neon serverless)
- Drizzle ORM with type-safe schema
- Tables: users, services, subscriptions, bookings, blog_posts, security_events

### External Services (Legacy)
- Stripe: subscription billing
- PDFKit: whitepaper generation
- Anthropic Claude: AI Advisor (backend proxy at `/api/assistant`)
