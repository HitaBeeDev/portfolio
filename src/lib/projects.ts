import type { Project } from "@/types/project";

export const projects: Project[] = [
  /* TODO: add design system project
  {
    slug: "helios-ui",
    name: "Helios UI",
    description: "Typed, accessible component library with CSS custom-property theming.",
    problem:
      "Teams were shipping inaccessible, inconsistently styled components across products. axe violations were caught in QA, not design.",
    stack: ["React", "TypeScript", "Storybook 8", "Radix UI", "Tailwind CSS", "Vitest", "Chromatic"],
    category: "design-systems",
    liveUrl: "https://helios-ui.example.com",
    githubUrl: "https://github.com/HitaBeeDev/helios-ui",
    hasCaseStudy: true,
  },
  */
  {
    slug: "meridian",
    name: "Meridian",
    description: "Real-time analytics dashboard with virtual scrolling for 100k+ rows.",
    problem:
      "Rendering large compliance datasets caused frame drops and browser freezes. The existing table had no virtualization and no reconnection logic on WebSocket drops.",
    stack: ["Next.js", "TanStack Query", "Recharts", "Zustand", "WebSockets", "PostgreSQL", "Prisma"],
    category: "full-stack",
    liveUrl: "https://meridian.example.com",
    githubUrl: "https://github.com/HitaBeeDev/meridian",
    hasCaseStudy: true,
  },
  {
    slug: "radix-a11y-fix",
    name: "Radix UI — A11y Fix",
    description: "Merged upstream fix for a missing aria-expanded on the Combobox trigger.",
    problem:
      "Screen readers couldn't communicate the open/closed state of the Combobox to keyboard users. The issue had been open for several months.",
    stack: ["TypeScript", "Radix UI", "Playwright", "axe-core"],
    category: "open-source",
    githubUrl: "https://github.com/radix-ui/primitives/pull/0000",
    hasCaseStudy: true,
  },
  /* TODO: add fullstack project
  {
    slug: "saas-starter",
    name: "SaaS Starter",
    description: "Full-stack SaaS with end-to-end TypeScript, Supabase RLS, and Stripe billing.",
    problem:
      "Wanted a production-grade starting point with type safety from the database schema through to the React component — no any, no implicit trust.",
    stack: ["Next.js", "tRPC", "Clerk", "Supabase", "Stripe", "Zod", "Vercel"],
    category: "full-stack",
    liveUrl: "https://saas-starter.example.com",
    githubUrl: "https://github.com/HitaBeeDev/saas-starter",
    hasCaseStudy: true,
  },
  */
  {
    slug: "lighthouse-lab",
    name: "Lighthouse Lab",
    description: "Systematic Core Web Vitals investigation documenting a 38% LCP improvement.",
    problem:
      "A client-side rendered app had an LCP of 4.2s on mobile. Needed a documented, reproducible process for identifying and measuring each intervention.",
    stack: ["Next.js", "Lighthouse CI", "WebPageTest", "Chrome DevTools"],
    category: "frontend",
    githubUrl: "https://github.com/HitaBeeDev/lighthouse-lab",
    hasCaseStudy: true,
  },
];
