import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProjectsSkeletonGrid } from "@/components/ui/ProjectCardSkeleton";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const skillBadges = ["React", "TypeScript", "Accessibility"] as const;

export default function Home() {
  return (
    <PageWrapper className="bg-[linear-gradient(180deg,#ffffff_0%,#f8f8ff_42%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#090909_0%,#0d0d17_45%,#090909_100%)]">
      <section
        id="hero"
        className="relative flex min-h-[calc(100dvh-3.5rem)] w-full min-w-0 flex-col items-center justify-center overflow-hidden py-16 text-center sm:py-20"
        aria-labelledby="hero-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(90deg,transparent,rgba(79,70,229,0.13),transparent)] blur-3xl dark:bg-[linear-gradient(90deg,transparent,rgba(129,140,248,0.11),transparent)]"
        />

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-white/75 px-3 py-1 text-xs font-semibold text-[#4338CA] shadow-sm shadow-indigo-950/5 backdrop-blur dark:border-indigo-300/15 dark:bg-white/[0.04] dark:text-indigo-300">
          <CheckCircle2 className="size-3.5" aria-hidden="true" />
          Available for frontend roles
        </div>

        <h1
          id="hero-heading"
          className="w-full max-w-[calc(100vw-2rem)] text-[clamp(2.05rem,8.5vw,6.75rem)] font-bold leading-[0.95] tracking-tight text-[#181818] dark:text-white"
        >
          Anahita Amiri
        </h1>

        <p className="mt-5 w-full max-w-xs text-[clamp(1rem,2.5vw,1.35rem)] leading-relaxed text-[#666666] dark:text-white/62 sm:max-w-2xl">
          Frontend engineer building fast, accessible, and polished interfaces
          with React and TypeScript.
        </p>

        <ul
          className="mt-6 flex flex-wrap justify-center gap-2"
          aria-label="Core skills"
        >
          {skillBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-xs font-semibold text-foreground/70 shadow-sm shadow-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72"
            >
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#4F46E5] px-6 text-sm font-semibold text-white shadow-sm shadow-indigo-900/20 transition-colors hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 dark:bg-indigo-400 dark:text-[#0d0d17] dark:hover:bg-indigo-300 dark:focus-visible:ring-indigo-300"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 bg-white/70 px-6 text-sm font-semibold text-foreground transition-colors hover:border-[#4F46E5]/35 hover:text-[#4338CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-indigo-300/35 dark:hover:text-indigo-300"
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
