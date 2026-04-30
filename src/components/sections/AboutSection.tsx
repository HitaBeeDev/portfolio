import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface ExperienceEntryProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: React.ReactNode;
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
      <div className="text-[0.9375rem] leading-[1.7] text-foreground/70">
        {description}
      </div>
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
              <div className="flex flex-col gap-8 text-[0.9375rem] leading-[1.75] text-foreground/75 sm:text-base">
                <p>
                  One of the most useful skills I learned in architecture school
                  is thinking in systems, which I use every time I write the
                  first lines of code. The way buildings organize space, flow,
                  and experience directly translates into how I approach state,
                  data flow, and user paths in front-end systems.
                </p>
                <p>
                  I enjoy solving complex problems, such as refactoring messy
                  code, improving performance, and transforming large codebases
                  into more organized and easier-to-maintain structures.
                </p>
                <p>
                  Currently, I am delving deeper into front-end architecture and
                  performance while developing back-end skills to better
                  understand and design full systems.
                </p>
              </div>
            </FadeIn>

            <hr className="border-t border-foreground/10" />

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
                    location="Istanbul, Turkey · Remote"
                    description={
                      <ul className="flex list-disc flex-col gap-1.5 pl-4">
                        <li>Built and maintained a GDPR compliance platform used by Data Protection Officers, as the only frontend developer on the team. Clients included large companies in Turkey.</li>
                        <li>Refactored a large React codebase by restructuring components, simplifying state management, and removing duplicated logic.</li>
                        <li>Built form-heavy interfaces across the platform, including multi-step GDPR workflows with React Hook Form, conditional branching, and cross-field validation.</li>
                        <li>Implemented data visualizations with Chart.js for compliance reporting and audit views.</li>
                        <li>Worked directly with product, design, and backend to translate requirements into shipped features end-to-end.</li>
                      </ul>
                    }
                  />
                  <ExperienceEntry
                    company="Anibal Bilişim · Internship"
                    role="Frontend Engineer Intern"
                    period="Jun 2023 – Aug 2023"
                    location="Istanbul, Turkey"
                    description={
                      <ul className="flex list-disc flex-col gap-1.5 pl-4">
                        <li>Built responsive UI components for client projects using Angular and Next.js.</li>
                        <li>Contributed to production codebases alongside senior engineers, learning how real teams structure, review, and ship frontend code.</li>
                      </ul>
                    }
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
