import { SectionHeading } from "@/components/ui/SectionHeading";

interface Tier {
  level: string;
  description: string;
  skills: string[];
}

const TIERS: Tier[] = [
  {
    level: "Expert",
    description: "Production-ready · can teach and review",
    skills: [
      "TypeScript strict mode · generics · conditional types",
      "React RSC · Suspense · concurrent features",
      "Next.js App Router · streaming · ISR",
      "Tailwind CSS · design token architecture",
      "Accessibility · WCAG 2.1 AA · axe-core · ARIA",
      "Core Web Vitals · LCP · CLS · INP",
      "Chrome DevTools Performance panel",
      "CSS custom properties · cascade layers",
    ],
  },
  {
    level: "Proficient",
    description: "Shipped extensively in production",
    skills: [
      "React DevTools Profiler · flamegraph analysis",
      "Vite / Webpack · bundle splitting · tree-shaking",
      "Radix UI · headless component composition",
      "TanStack Query · optimistic updates · cache strategy",
      "Zustand · state slices · middleware",
      "Storybook 8 · CSF3 · Chromatic visual regression",
      "Vitest · Playwright · axe-playwright",
      "Figma → code · design tokens · component specs",
    ],
  },
  {
    level: "Familiar",
    description: "Shipped in projects · can ramp quickly",
    skills: [
      "tRPC · end-to-end type safety",
      "Prisma · PostgreSQL · query optimization",
      "Supabase · RLS policies · Realtime",
      "WebSockets · exponential backoff · reconnect",
      "Recharts · Visx · Canvas vs SVG tradeoffs",
      "Sentry · error boundaries · perf monitoring",
      "Stripe · Clerk · auth patterns",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-black/5 py-24 dark:border-white/5"
      aria-labelledby="skills-heading"
    >
      <SectionHeading id="skills-heading" title="Skills" />

      <div className="grid gap-10 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <div key={tier.level} className="flex flex-col gap-4">
            {/* Tier header */}
            <div className="flex flex-col gap-0.5 border-t-2 border-foreground/15 pt-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                {tier.level}
              </span>
              <span className="text-xs text-foreground/70">{tier.description}</span>
            </div>

            {/* Skill pills */}
            <ul className="flex flex-wrap gap-2" role="list">
              {tier.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.04] px-2.5 py-1 text-xs font-medium leading-none text-foreground/75 dark:border-white/10 dark:bg-white/[0.04]">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
