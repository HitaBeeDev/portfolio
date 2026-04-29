import { FadeIn } from "@/components/ui/FadeIn";

interface ExperienceEntryProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

function ExperienceEntry({
  company,
  role,
  period,
  location,
  description,
}: ExperienceEntryProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-black/[0.07] py-8 first:border-t-0 first:pt-0 dark:border-white/[0.07]">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="font-semibold text-foreground">{company}</h4>
        <span className="shrink-0 text-sm tabular-nums text-muted">{period}</span>
      </div>
      <p className="text-sm font-medium text-muted">
        {role}&nbsp;&nbsp;·&nbsp;&nbsp;{location}
      </p>
      <p className="text-[0.9375rem] leading-[1.7] text-foreground/70">
        {description}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-black/[0.07] dark:border-white/[0.07]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[160px_1fr] lg:gap-20">
          {/* Label column */}
          <div>
            <h2
              id="about-heading"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted lg:sticky lg:top-24"
            >
              About
            </h2>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-16">
            {/* Narrative */}
            <FadeIn>
              <div className="flex flex-col gap-5 text-[0.9375rem] leading-[1.75] text-foreground/75 sm:text-base">
                <p>
                  Architecture school gave me a way of thinking about systems
                  before I wrote my first line of JavaScript. Five years studying
                  how structures organize space, circulation, and experience across
                  scales maps directly to how components organize state, data
                  flow, and user paths through an interface. The pivot
                  wasn&apos;t accidental — it was a recognition that the same
                  questions I was asking about buildings were more precisely
                  answerable in code.
                </p>
                <p>
                  From 2023 to 2025 I was the sole frontend developer at{" "}
                  <strong className="font-semibold text-foreground">
                    Jurcom GRC Services
                  </strong>
                  , a Dutch legal-tech company building GDPR compliance platforms
                  for Data Protection Officers. I owned the entire client-side:
                  migrated a legacy Angular codebase to React, built multi-step
                  form flows for GDPR Article workflows, and added
                  data-visualization layers for compliance reporting — all
                  shipped independently from design through production.
                </p>
              </div>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.08}>
              <div className="flex flex-col gap-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Experience
                </h3>
                <div>
                  <ExperienceEntry
                    company="Jurcom GRC Services"
                    role="Frontend Developer"
                    period="Sep 2023 – Dec 2025"
                    location="Netherlands · Remote"
                    description="Sole frontend developer on a privacy compliance platform used by Data Protection Officers across the Netherlands. Migrated a legacy Angular codebase to a maintainable React + TypeScript architecture. Built multi-step GDPR form flows with React Hook Form and complex validation logic, added a Chart.js data-visualization layer for compliance reporting, and shipped all features independently from design through production."
                  />
                  <ExperienceEntry
                    company="Anibal Bilişim"
                    role="Frontend Intern"
                    period="2023"
                    location="Istanbul, Turkey"
                    description="Built features across client projects in Angular and Next.js. First production experience with TypeScript and component-driven architecture."
                  />
                </div>
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.14}>
              <div className="flex flex-col gap-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Education
                </h3>
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold text-foreground">
                    Istanbul Technical University
                  </p>
                  <p className="text-sm text-muted">
                    Bachelor of Architecture&nbsp;&nbsp;·&nbsp;&nbsp;2019 – 2024
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
