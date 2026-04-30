import Link from "next/link";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/project";

const PREVIEW_PROJECT_SLUGS = ["helios-ui", "meridian", "saas-starter"] as const;

const PREVIEW_PROJECTS = PREVIEW_PROJECT_SLUGS.map((slug) =>
  projects.find((project) => project.slug === slug),
).filter((project) => project !== undefined);

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  "design-systems": "Design System",
  "full-stack": "Full-Stack",
  "open-source": "Open Source",
  frontend: "Frontend",
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid — full section width */}
      <div aria-hidden="true" className="hero-dot-grid absolute inset-0 -z-10" />

      {/* Subtle top-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 -top-64 -z-10 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(61,90,115,0.09),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(124,143,160,0.07),transparent_65%)]"
      />

      {/* Availability badge — top-right, aligns with header edge padding */}
      <div
        className="animate-fade-in-up absolute right-4 top-5 flex items-center gap-2 sm:right-6"
        style={{ animationDelay: "640ms" }}
        aria-label="Employment status: currently available for work"
      >
        <span className="availability-dot" aria-hidden="true" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          Available for work
        </span>
      </div>

      <div
        className="animate-fade-in-up absolute bottom-8 left-1/2 hidden w-full max-w-5xl -translate-x-1/2 px-4 sm:px-6 lg:block"
        aria-hidden="true"
        style={{ animationDelay: "560ms" }}
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-foreground/20" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
            Scroll
          </span>
        </div>
      </div>

      {/* Content — constrained to page grid */}
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col justify-between px-4 py-20 sm:px-6 sm:py-28">

        {/* Main row: left copy + right evidence column */}
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12">

          {/* Left: kicker, name, rule, positioning, CTAs */}
          <div className="flex flex-col lg:flex-1">
            {/* Kicker */}
            <p
              className="animate-fade-in-up text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
              style={{ animationDelay: "0ms" }}
            >
              Frontend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Aachen, DE
            </p>

            {/* Name */}
            <h1
              id="hero-heading"
              className="animate-fade-in-up mt-5 font-display text-[clamp(3.6rem,9.5vw,8.5rem)] leading-[0.87] tracking-[-0.025em] text-foreground"
              style={{ animationDelay: "80ms" }}
            >
              Anahita
              <br />
              Amiri
            </h1>

            {/* Thin rule */}
            <div
              className="animate-fade-in-up mt-8 h-px w-14 bg-foreground/20"
              aria-hidden="true"
              style={{ animationDelay: "160ms" }}
            />

            {/* Positioning statement */}
            {/* <p
              className="animate-fade-in-up mt-7 max-w-sm text-base leading-[1.65] text-muted sm:text-[1.05rem]"
              style={{ animationDelay: "240ms" }}
            >
              I work on complex frontend systems and make them faster, cleaner,
              and easier to maintain.
            </p> */}

            {/* CTAs */}
            <div
              className="animate-fade-in-up mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--accent)] px-7 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-black/[0.12] px-7 text-sm font-medium text-foreground transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:border-white/[0.12] dark:hover:bg-white/[0.05]"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: profile card + selected work */}
          <div
            className="animate-fade-in-up flex w-full shrink-0 flex-col gap-5 lg:w-[40%]"
            style={{ animationDelay: "400ms" }}
          >
            <div
              className="select-none rounded-lg border border-foreground/[0.08] bg-foreground/[0.025] p-5 font-mono text-[11.5px] leading-[1.9]"
              aria-hidden="true"
            >
              <p className="text-foreground/25">{"// engineer.profile.ts"}</p>
              <p className="mt-2 text-foreground/35">
                <span className="text-foreground/50">export</span>
                {" "}
                <span className="text-foreground/50">const</span>
                {" engineer = {"}
              </p>
              <div className="ml-4 space-y-0.5">
                <p>
                  <span className="text-foreground/35">name</span>
                  <span className="text-foreground/25">{": "}</span>
                  <span className="text-foreground/60">&quot;Anahita Amiri&quot;</span>
                  <span className="text-foreground/25">,</span>
                </p>
                <p>
                  <span className="text-foreground/35">role</span>
                  <span className="text-foreground/25">{": "}</span>
                  <span className="text-foreground/60">&quot;Frontend Engineer&quot;</span>
                  <span className="text-foreground/25">,</span>
                </p>
                <p>
                  <span className="text-foreground/35">location</span>
                  <span className="text-foreground/25">{": "}</span>
                  <span className="text-foreground/60">&quot;Aachen, DE&quot;</span>
                  <span className="text-foreground/25">,</span>
                </p>
                <p>
                  <span className="text-foreground/35">stack</span>
                  <span className="text-foreground/25">{": ["}</span>
                  <span className="text-foreground/55">&quot;React&quot;</span>
                  <span className="text-foreground/25">{", "}</span>
                  <span className="text-foreground/55">&quot;Next.js&quot;</span>
                  <span className="text-foreground/25">{", "}</span>
                  <span className="text-foreground/55">&quot;TypeScript&quot;</span>
                  <span className="text-foreground/25">{"],"}</span>
                </p>
                <p>
                  <span className="text-foreground/35">status</span>
                  <span className="text-foreground/25">{": "}</span>
                  <span className="text-[#22c55e]/80 dark:text-[#4ade80]/70">&quot;available&quot;</span>
                </p>
              </div>
              <p className="text-foreground/35">{"}"}</p>
            </div>

            <div
              className="animate-fade-in-up rounded-lg border border-foreground/[0.08] bg-background/70 p-3.5 backdrop-blur-sm"
              style={{ animationDelay: "480ms" }}
              aria-labelledby="hero-work-heading"
            >
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <h2
                  id="hero-work-heading"
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted"
                >
                  Selected Work
                </h2>
                <a
                  href="#projects"
                  className="text-xs font-medium text-foreground/55 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  View all
                </a>
              </div>

              <div className="divide-y divide-foreground/[0.07]">
                {PREVIEW_PROJECTS.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group grid gap-1 py-2.5 first:pt-1 last:pb-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold leading-snug text-foreground">
                        {project.name}
                      </h3>
                      <span
                        className="text-sm text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground/55"
                        aria-hidden="true"
                      >
                        -&gt;
                      </span>
                    </div>
                    <p className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted/80">
                      {CATEGORY_LABEL[project.category]}
                      <span className="px-1.5 text-foreground/25" aria-hidden="true">
                        /
                      </span>
                      {project.stack.slice(0, 2).join(" + ")}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" />
      </div>
    </section>
  );
}
