# Anahita Amiri Portfolio

Personal portfolio for Anahita Amiri, a frontend engineer based in Aachen, Germany. The site presents selected projects, case studies, skills from the current CV, and contact links.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- MDX for project case studies
- Framer Motion for small UI transitions
- Vercel Analytics and Speed Insights, gated by an environment flag
- Sentry for optional error monitoring

## Features

- Responsive single-page portfolio layout
- Filterable selected work section
- MDX-powered project detail pages at `/projects/[slug]`
- Dark mode support with pre-paint theme initialization
- Downloadable CV at `/cv.pdf`
- SEO metadata and Open Graph configuration
- Optional Vercel Web Analytics, Speed Insights, and Sentry instrumentation

## Project Structure

```text
src/app/                      App Router pages and metadata
src/components/layout/         Header, page wrapper, navigation shell
src/components/sections/       Home page sections
src/components/ui/             Shared UI pieces
src/content/projects/          MDX case studies
src/lib/projects.ts            Project card data and ordering
public/cv.pdf                  Public CV download
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev      # Start local development server
npm run lint     # Run ESLint
npm run build    # Build production app with webpack
npm run start    # Start production server after build
```

## Environment Variables

Create `.env.local` from `.env.example` when needed.

```bash
cp .env.example .env.local
```

Common variables:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_ENABLE_VERCEL_INSIGHTS=true
```

`NEXT_PUBLIC_ENABLE_VERCEL_INSIGHTS` must be set to `true` before Vercel Analytics and Speed Insights are rendered.

## Updating Content

- Projects: edit `src/lib/projects.ts`
- Case studies: add or update MDX files in `src/content/projects/`
- Skills: edit `src/components/sections/SkillsSection.tsx`
- Contact links and copy: edit `src/components/sections/ContactSection.tsx`
- CV download: replace `public/cv.pdf`

Each project with `hasCaseStudy: true` should have a matching MDX file named after its slug, for example `src/content/projects/adminix.mdx`.

## Deployment

The app is designed for Vercel. Set the production environment variables in the Vercel project settings, then deploy from the main branch.
