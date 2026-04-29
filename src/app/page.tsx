import { Suspense } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { LighthouseBadge } from "@/components/ui/LighthouseBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProjectsSkeletonGrid } from "@/components/ui/ProjectCardSkeleton";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PageWrapper>
      <section
        id="hero"
        className="flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center gap-6 py-16 text-center"
        aria-labelledby="hero-heading"
      >
        {/* Full name — LCP target, no image */}
        <h1
          id="hero-heading"
          className="text-[clamp(2.25rem,6vw,4rem)] font-bold leading-tight tracking-tight"
        >
          Your Name
        </h1>

        {/* Positioning statement — specific, not generic */}
        <p className="max-w-lg text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-foreground/65">
          Frontend engineer who obsesses over performance, a11y, and the gap
          between design and code.
        </p>

        {/* Lighthouse 100/100 badge — update URL once deployed */}
        <LighthouseBadge url="https://pagespeed.web.dev/report?url=https%3A%2F%2Fyoursite.com" />

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 px-6 text-sm font-semibold transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/15 dark:hover:bg-white/5"
          >
            Download Résumé
          </a>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section
        id="about"
        className="border-t border-black/5 py-24 dark:border-white/5"
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
          <div className="flex flex-col gap-5">
            <SectionHeading id="about-heading" title="About" />

            {/*
              ── Copy guidelines (delete this comment before launch) ──
              · 100 words max
              · No: "passionate", "hard-working", "team player", "user-friendly"
              · Must mention one concrete built thing + a real outcome
              · Must state what you uniquely care about as an engineer
            */}
            <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/80">
              <p>
                I care about the milliseconds users never notice and the
                semantics screen-reader users depend on. The gap between a
                working component and a correct, accessible, performant one is
                where I focus.
              </p>
              <p>
                I built{" "}
                <strong className="font-semibold text-foreground">
                  Helios UI
                </strong>{" "}
                — a typed, accessible 20-component design system — and measured
                a 94% reduction in axe violations across the products that
                adopted it.
              </p>
              <p>
                My tools: TypeScript strict mode, React DevTools Profiler,
                Chrome Performance panel, and Figma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <Suspense
        fallback={
          <section
            id="projects"
            className="border-t border-black/5 py-24 dark:border-white/5"
          >
            <div className="mb-10 h-8 w-28 animate-pulse rounded-md bg-black/8 dark:bg-white/8" />
            <ProjectsSkeletonGrid />
          </section>
        }
      >
        <ProjectsSection />
      </Suspense>

      {/* ── Skills ────────────────────────────────────────── */}
      <SkillsSection />

      {/* ── Contact ───────────────────────────────────────── */}
      <ContactSection />
    </PageWrapper>
  );
}
