import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "adminix",
    name: "Adminix",
    description:
      "Admin dashboard for managing users, roles, and activity across 10 mock customer accounts — 100k users, fully client-side.",
    problem:
      "The whole app runs without a real backend. MSW intercepts every fetch from a seed file. Designed mutations, pagination, and search to behave like a real API, despite operating entirely client-side without any server interaction.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "MSW",
      "React Virtual",
      "Zod",
      "Playwright",
      "Vitest",
    ],
    category: "frontend",
    liveUrl: "https://adminix-dashboard.vercel.app",
    githubUrl: "https://github.com/HitaBeeDev/adminix",
    hasCaseStudy: true,
  },
  {
    slug: "flyvio",
    name: "Flyvio",
    description:
      "Flight search and booking app — real airport and airline data from OpenFlights, flights generated on demand for any route, no backend.",
    problem:
      "Without a flight API, search results have to be generated. Flyvio pulls from 5,518 real airports and 80 carriers and builds plausible flights for any route at query time — no hardcoded list, no server.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "React Router v6",
    ],
    category: "frontend",
    liveUrl: "https://flyvio.vercel.app",
    githubUrl: "https://github.com/HitaBeeDev/flyvio",
    hasCaseStudy: true,
  },
  {
    slug: "lattice",
    name: "Lattice",
    description:
      "Productivity dashboard combining task management, habit tracking, and a Pomodoro timer — all persisted locally with IndexedDB, no account required.",
    problem:
      "Keeping tasks, habits, and focus sessions in sync across pages without a backend. Dexie wraps IndexedDB so everything survives a refresh, and the dashboard aggregates it all into streaks and weekly progress.",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Dexie / IndexedDB",
      "React Hook Form",
      "Zod",
      "React Router",
      "Vitest",
    ],
    category: "frontend",
    liveUrl: "https://lattice-project.vercel.app",
    githubUrl: "https://github.com/HitaBeeDev/lattice",
    hasCaseStudy: true,
  },
  {
    slug: "skin-and-silk",
    name: "Skin & Silk",
    description:
      "Luxury beauty storefront with product browsing, cart, order flows, and an editorial blog — all client-side, cart persisted to localStorage.",
    problem:
      "Cart state needs to survive page refreshes and navigations without a backend. A custom Redux middleware syncs the cart slice to localStorage on every dispatch so it rehydrates on load.",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router v6",
      "Storybook",
    ],
    category: "frontend",
    liveUrl: "https://skin-and-silk.vercel.app",
    githubUrl: "https://github.com/HitaBeeDev/skin-and-silk-beauty-shop",
    hasCaseStudy: true,
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    description:
      "Minimal expense tracker built with Angular — add, view, and delete daily expenses. A deliberate step outside the React stack.",
    problem:
      "Angular's component model, dependency injection, and CLI workflow are different enough from React that building something small first was the right way to get comfortable with it.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "Karma"],
    category: "frontend",
    liveUrl: "https://simple-expensetracker-app.vercel.app",
    githubUrl: "https://github.com/HitaBeeDev/simple-expense-tracker-app",
    hasCaseStudy: true,
  },
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
  /* TODO: add open source project
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
  */
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
];
