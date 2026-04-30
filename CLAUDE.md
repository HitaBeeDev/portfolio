# Portfolio Project — AI Agent Instructions

> Elite frontend portfolio targeting FAANG+, unicorns, and high-scale product orgs.
> Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code. Heed deprecation notices.

---

## Goal

Build a production-quality portfolio that signals senior frontend engineering. Every decision must answer: *"Does this person think and build like a senior engineer?"*

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router + React Server Components) |
| Language | TypeScript strict mode — zero `any` |
| Styling | Tailwind CSS + CSS custom properties for theming |
| Content | MDX for case study and blog pages |
| Deployment | Vercel with preview deployments on every PR |
| Analytics | Vercel Analytics + Speed Insights |
| Monitoring | Sentry for error tracking |
| Testing | Playwright (E2E + a11y), Vitest (unit), axe-playwright |
| CI/CD | GitHub Actions: lint → type-check → test → Lighthouse CI → deploy |

---

## Folder Structure

```
src/
  app/              # Next.js App Router pages and layouts
  components/
    ui/             # Reusable base components
    layout/         # Header, Footer, PageWrapper
  content/
    projects/       # MDX case studies (one per project)
    blog/           # MDX blog posts
  hooks/            # Custom React hooks
  lib/              # Utilities (cn(), fonts, MDX parser)
  styles/           # tokens.css (CSS custom properties)
  types/            # Shared TypeScript types
public/             # Static assets, cv.pdf, favicon, OG images
```

---

## Non-Negotiable Quality Standards

### Performance
- Lighthouse ≥ 100/100 on all four categories (Performance, Accessibility, Best Practices, SEO)
- LCP < 1.2s, CLS = 0, INP < 100ms
- Initial JS bundle under 200kb gzipped
- All images via `next/image` — WebP, explicit `width`/`height`, `priority` on above-fold
- Font via `next/font` with `display: swap` — no FOUT, no external font requests
- Zero render-blocking resources
- Every page statically generated (SSG)

### Accessibility
- axe-core runs in test suite — 0 violations
- axe-playwright runs on every page in E2E suite — 0 violations
- Skip-to-content link is the first focusable element in the DOM
- All icon-only buttons have `aria-label`
- Color contrast ≥ 4.5:1 everywhere
- Visible `:focus-visible` rings — never `outline: none`
- Full keyboard navigation tested
- Tested with VoiceOver (macOS)

### TypeScript
- `strict: true` and `noUncheckedIndexedAccess: true` in tsconfig.json
- Zero `any` types anywhere
- Zero `// @ts-ignore` escapes

### Testing
- `npm run test` — 0 failures (Vitest unit tests)
- `npx playwright test` — 0 failures (E2E + a11y)
- At least one test file in every project repo

---

## Design Principles

- **Typography:** One premium variable font — Inter, Geist, or Neue Haas Grotesk
- **Color:** One brand color + black + white + one neutral. High contrast. Stripe docs aesthetic, not Dribbble.
- **Dark mode:** Toggle persists via localStorage + respects system preference. `suppressHydrationWarning` on `<html>`. No flash on load.
- **Motion:** Purposeful only — subtle fade-in via IntersectionObserver. No carousels, no parallax, no auto-playing animations.
- **Spacing:** 4px base grid (multiples of 4 or 8)
- **Type scale:** `clamp()` for fluid sizing — not breakpoint overrides
- **Responsive:** No horizontal scroll at 320px, 768px, 1440px, or 2560px

---

## Base UI Components (`src/components/ui/`)

| Component | Notes |
|---|---|
| `DarkModeToggle` | System pref + localStorage, no flash on load |
| `Button` | Variants: primary/outline/ghost; sizes: sm/md/lg; loading state |
| `Badge` | Tech stack pill with color variants per category |
| `Card` | Project card wrapper with hover state |
| `Tooltip` | Accessible hover label via Radix UI |
| `SkipToContent` | First focusable DOM element, visually hidden until focused |
| `ScrollToTop` | Appears after 500px scroll |
| `LighthouseBadge` | Score with color coding (green ≥ 90, amber ≥ 50, red < 50) |
| `TechPill` | Small tag with tech name + optional icon |
| `SectionHeading` | Consistent h2 with optional subtitle |
| `ExternalLink` | `target="_blank" rel="noopener noreferrer"` + icon |

---

## Pages & Sections

### Hero (`/`)
- Name as `h1`, visible above fold on all screen sizes
- Positioning statement — specific: *"Frontend engineer who obsesses over performance, a11y, and the gap between design and code"*
- Lighthouse 100/100 badge (screenshot or live-fetched)
- CTA 1: "View Work" (smooth scroll to projects)
- CTA 2: "Download Résumé" (PDF < 200KB, new tab)

### About (`/#about`)
- 100 words max
- Specific about what you uniquely care about as an engineer
- Mentions one concrete built thing
- Zero filler: no "passionate", "hard-working", "team player", "user-friendly"

### Projects (`/#projects`)
- 4–5 projects max — depth over breadth
- Filter bar: All / Frontend / Full-Stack / Open Source / Design Systems
- Filter state in URL search params (`?filter=full-stack`) — persists on refresh
- Each card: name, one-line description, tech stack pills, Live / GitHub / Case Study links

### Case Studies (`/projects/[slug]`)
- Driven by MDX in `content/projects/`
- Required frontmatter: `title`, `description`, `stack`, `liveUrl`, `githubUrl`, `date`, `tags`
- Required sections: Problem → Approach → Measurable outcome (real numbers) → Tradeoffs → "What I'd do differently" → "Known limitations" → Architecture diagram → Tech stack with versions
- Reading time shown, breadcrumb navigation, OG meta tags

### Skills (`/#skills`)
- Organized by: Expert / Proficient / Familiar
- No bare "HTML, CSS, JavaScript" — too generic
- Include seniority signals: Webpack/Vite internals, React DevTools Profiler, Chrome Performance panel, Figma-to-code

### Blog (`/#blog` + `/blog/[slug]`)
- At least 2 published posts; at least one 1,500+ word deep-dive
- Syntax highlighting via rehype-highlight
- OG meta tags per post

### Contact (`/#contact`)
- Email obfuscated against bots
- GitHub, LinkedIn, Twitter/X icon links with aria-labels
- No reCAPTCHA contact form — mailto or Resend API route only

### 404 (`/not-found.tsx`)
- Matches site design, link back to home

---

## Projects to Build

### Project 1: Design System — Helios UI
**Stack:** React + TypeScript, Storybook 8, Radix UI, Tailwind, Vitest + Testing Library, Chromatic, published to npm

Key requirements:
- 15–20 components: Button, Input, Select, Dialog, Toast, DataTable, Combobox minimum
- Polymorphic `as` prop with full TypeScript inference — no `any`
- Compound component pattern (e.g. `Select.Root / Select.Trigger / Select.Content`)
- Keyboard nav built from scratch in Combobox before Radix — delta documented
- CSS custom property theming — consumers override tokens without specificity wars
- axe-core in every Storybook story — 0 violations
- Chromatic visual regression CI
- Full WCAG 2.1 AA compliance documented in README

### Project 3: Open Source Contribution
**Target:** radix-ui/primitives, tanstack/query, vercel/next.js, shadcn/ui, or ≥ 500 star repo

Requirements:
- PR merged — not just open
- Substantive: bug fix with regression test, a11y fix, or perf improvement — no typo fixes
- Case study documents: issue, diagnosis, change, maintainer review process

### Project 4: Full-Stack SaaS Product
**Stack:** Next.js App Router, tRPC, Clerk, Supabase (PostgreSQL + Realtime), Vercel, Stripe

Key requirements:
- Live on custom domain with 10–20 real users
- End-to-end TypeScript: Zod schema → tRPC → React component — zero `any`
- Row-level security documented (Supabase RLS policies)
- `usePermission(action)` hook — no ad-hoc role conditionals scattered across components
- Error boundaries with user-friendly fallback + Sentry auto-reporting
- Preview environments on every PR

---

## `package.json` Required Scripts

```json
{
  "scripts": {
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "lighthouse": "lhci autorun",
    "build": "next build",
    "analyze": "ANALYZE=true next build"
  }
}
```

---

## GitHub Actions CI Pipeline (`.github/workflows/ci.yml`)

Steps in order: `install → type-check → lint → test → build → E2E test → Lighthouse CI`

- Runs on every push to `main` AND every pull request
- Build fails if TypeScript has errors
- Lighthouse CI fails if any score drops below 95
- Vercel: preview URL on every PR, production on merge to main

---

## Red Flags to Never Introduce

- Tutorial/clone projects (todo app, weather app, Netflix clone)
- No live URLs on any project
- `any` types or `// @ts-ignore`
- Console errors or warnings in production
- Vague case study claims — always use real before/after numbers
- No README on any linked GitHub repo
- Broken links anywhere (run Playwright link-checker in CI)
- Sensitive data (API keys, tokens, emails) in any public repo
- `outline: none` without a `:focus-visible` replacement
- `node_modules`, `.env`, or build artifacts committed
- Auto-playing animations, parallax, or carousels

---

## Launch Gate — Only Deploy When All Are True

- Every Lighthouse category = 100 on the deployed URL (screenshot it)
- `npm run test` — 0 failures
- `npx playwright test` — 0 failures
- `npm run build` — initial JS under 200kb gzipped
- Zero console errors on any page in production
- Zero TypeScript errors with strict mode
- GitHub Actions CI badge is green on repo homepage
- Every case study has at least one real before/after number
- You can explain every technical decision out loud without looking at the code
