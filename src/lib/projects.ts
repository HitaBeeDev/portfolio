import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "helios-ui",
    name: "Helios UI",
    description:
      "Typed, accessible 20-component design system with polymorphic APIs and CSS custom-property theming.",
    stack: [
      "React",
      "TypeScript",
      "Storybook 8",
      "Radix UI",
      "Tailwind CSS",
      "Vitest",
      "Chromatic",
    ],
    category: "design-systems",
    liveUrl: "https://helios-ui.example.com",
    githubUrl: "https://github.com/HitaBeeDev/helios-ui",
    hasCaseStudy: true,
  },
  {
    slug: "meridian",
    name: "Meridian",
    description:
      "Real-time analytics dashboard with virtual scrolling for 100k+ rows and WebSocket reconnection logic.",
    stack: [
      "Next.js",
      "TanStack Query",
      "Recharts",
      "Zustand",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
    ],
    category: "full-stack",
    liveUrl: "https://meridian.example.com",
    githubUrl: "https://github.com/HitaBeeDev/meridian",
    hasCaseStudy: true,
  },
  {
    slug: "radix-a11y-fix",
    name: "Radix UI — A11y Fix",
    description:
      "Merged fix for missing aria-expanded on Combobox trigger; added regression test with axe-playwright.",
    stack: ["TypeScript", "Radix UI", "Playwright", "axe-core"],
    category: "open-source",
    githubUrl: "https://github.com/radix-ui/primitives/pull/0000",
    hasCaseStudy: true,
  },
  {
    slug: "saas-starter",
    name: "SaaS Starter",
    description:
      "Full-stack SaaS with tRPC, Clerk auth, Supabase RLS, Stripe billing, and preview environments on every PR.",
    stack: [
      "Next.js",
      "tRPC",
      "Clerk",
      "Supabase",
      "Stripe",
      "Zod",
      "Vercel",
    ],
    category: "full-stack",
    liveUrl: "https://saas-starter.example.com",
    githubUrl: "https://github.com/HitaBeeDev/saas-starter",
    hasCaseStudy: true,
  },
  {
    slug: "lighthouse-lab",
    name: "Lighthouse Lab",
    description:
      "Systematic Core Web Vitals investigation — 38% LCP improvement documented with per-intervention deltas.",
    stack: [
      "Next.js",
      "Lighthouse CI",
      "WebPageTest",
      "Chrome DevTools",
    ],
    category: "frontend",
    githubUrl: "https://github.com/HitaBeeDev/lighthouse-lab",
    hasCaseStudy: true,
  },
];
