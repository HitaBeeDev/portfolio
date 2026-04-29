import { Suspense } from "react";
import { CheckCircle2, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProjectsSkeletonGrid } from "@/components/ui/ProjectCardSkeleton";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const skillBadges = ["React", "TypeScript", "Accessibility"] as const;

const metrics = [
  { label: "Perf", value: "98", icon: Gauge },
  { label: "A11y", value: "100", icon: ShieldCheck },
  { label: "Polish", value: "High", icon: Sparkles },
] as const;

const codeLines = [
  "const interface = compose({",
  "  speed: measured,",
  "  accessibility: builtIn,",
  "  details: polished,",
  "});",
] as const;

export default function Home() {
  return (
    <PageWrapper className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfa_42%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#090909_0%,#0b1110_45%,#090909_100%)]">
      <section
        id="hero"
        className="relative flex min-h-[calc(100dvh-3.5rem)] w-full min-w-0 flex-col items-center justify-center overflow-hidden py-16 text-center sm:py-20"
        aria-labelledby="hero-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.12),transparent)] blur-3xl dark:bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.1),transparent)]"
        />

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-600/15 bg-white/75 px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm shadow-teal-950/5 backdrop-blur dark:border-teal-300/15 dark:bg-white/[0.04] dark:text-teal-300">
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
            className="inline-flex h-11 items-center justify-center rounded-md bg-teal-600 px-6 text-sm font-semibold text-white shadow-sm shadow-teal-900/20 transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 dark:bg-teal-400 dark:text-[#071312] dark:hover:bg-teal-300 dark:focus-visible:ring-teal-300"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 bg-white/70 px-6 text-sm font-semibold text-foreground transition-colors hover:border-teal-600/35 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-teal-300/35 dark:hover:text-teal-300"
          >
            Download Résumé
          </a>
        </div>

        <div className="mt-6 grid w-full max-w-xs min-w-0 gap-3 overflow-hidden rounded-lg border border-black/8 bg-white/88 p-3 text-left shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:mt-8 sm:max-w-3xl sm:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="min-w-0 overflow-hidden rounded-md border border-black/8 bg-[#101615] p-4 font-mono text-[11px] leading-5 text-white shadow-inner dark:border-white/10 sm:text-[13px] sm:leading-6">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            {codeLines.map((line, index) => (
              <p
                key={line}
                className={[
                  "whitespace-pre-wrap",
                  index === 0 ? "text-teal-200" : "text-white/72",
                ].join(" ")}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-rows-3">
            {metrics.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex min-w-0 items-center justify-between rounded-md border border-black/8 bg-[#f7fbfa] px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.04] sm:py-3"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-md bg-teal-600/10 text-teal-700 dark:bg-teal-300/10 dark:text-teal-300">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground/72">
                    {label}
                  </span>
                </div>
                <span className="text-sm font-bold text-teal-700 dark:text-teal-300">
                  {value}
                </span>
              </div>
            ))}
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
