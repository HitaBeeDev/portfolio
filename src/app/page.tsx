import { Suspense } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProjectsSkeletonGrid } from "@/components/ui/ProjectCardSkeleton";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PageWrapper className="bg-[linear-gradient(180deg,#ffffff_0%,#f8f8ff_42%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#090909_0%,#0d0d17_45%,#090909_100%)]">
      <section
        id="hero"
        className="relative flex min-h-[calc(100dvh-3.5rem)] w-full min-w-0 flex-col items-center justify-center overflow-hidden py-16 text-center sm:py-24"
        aria-labelledby="hero-heading"
      >
        {/* Dot grid texture */}
        <div aria-hidden="true" className="hero-dot-grid absolute inset-0 -z-10" />

        {/* Radial glow from top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-24 -z-10 h-[36rem] bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(79,70,229,0.14),transparent)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(129,140,248,0.11),transparent)]"
        />

        {/* Name */}
        <h1
          id="hero-heading"
          className="animate-fade-in-up w-full max-w-[calc(100vw-2rem)] text-[clamp(2.8rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-[#0f0f0f] dark:text-white"
          style={{ animationDelay: "70ms" }}
        >
          Anahita Amiri
        </h1>

        {/* Positioning statement */}
        <p
          className="animate-fade-in-up mt-6 w-full max-w-lg text-[clamp(1rem,2.2vw,1.15rem)] leading-relaxed text-foreground/55 dark:text-white/50"
          style={{ animationDelay: "140ms" }}
        >
          Frontend engineer who obsesses over{" "}
          <strong className="font-semibold text-foreground/85 dark:text-white/80">
            performance
          </strong>
          ,{" "}
          <strong className="font-semibold text-foreground/85 dark:text-white/80">
            accessibility
          </strong>
          , and the gap between design and code.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up mt-7 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "210ms" }}
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#4F46E5] px-7 text-sm font-semibold text-white shadow-sm shadow-indigo-900/20 transition-colors hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 dark:bg-indigo-400 dark:text-[#0d0d17] dark:hover:bg-indigo-300 dark:focus-visible:ring-indigo-300"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 bg-white/70 px-7 text-sm font-semibold text-foreground transition-colors hover:border-[#4F46E5]/35 hover:text-[#4338CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-indigo-300/35 dark:hover:text-indigo-300"
          >
            Download Résumé
          </a>
        </div>

        {/* Scroll nudge */}
        <div
          className="animate-fade-in-up absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "500ms" }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/25">
              Scroll
            </span>
            <svg
              className="h-3.5 w-3.5 animate-bounce text-foreground/25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
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
