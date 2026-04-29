const PREVIEW_PROJECTS = [
  { name: "Helios UI", year: "2024", slug: "helios-ui" },
  { name: "Meridian", year: "2024", slug: "meridian" },
  { name: "SaaS Starter", year: "2024", slug: "saas-starter" },
] as const;

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

      {/* Content — constrained to page grid */}
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col justify-between px-4 py-20 sm:px-6 sm:py-28">

        {/* ── Main row: left copy + right card ── */}
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-8">

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
            <p
              className="animate-fade-in-up mt-7 max-w-sm text-base leading-[1.65] text-muted sm:text-[1.05rem]"
              style={{ animationDelay: "240ms" }}
            >
              I build privacy-first compliance tools and refactor legacy React
              codebases into systems that are pleasant to work in.
            </p>

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

          {/* Right: monospace profile card */}
          <div
            className="animate-fade-in-up w-full shrink-0 lg:w-[38%]"
            style={{ animationDelay: "400ms" }}
            aria-hidden="true"
          >
            <div className="select-none rounded-lg border border-foreground/[0.08] bg-foreground/[0.025] p-5 font-mono text-[11.5px] leading-[1.9]">
              <p className="text-foreground/25">// engineer.profile.ts</p>
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
          </div>
        </div>

        {/* ── Bottom: selected work previews + scroll nudge ── */}
        <div>
          {/* Section label */}
          <p
            className="animate-fade-in-up mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30"
            style={{ animationDelay: "480ms" }}
          >
            Selected Work
          </p>

          {/* 3-up project preview cards */}
          <div
            className="animate-fade-in-up mb-7 grid grid-cols-3 gap-3 sm:gap-4"
            style={{ animationDelay: "500ms" }}
          >
            {PREVIEW_PROJECTS.map((p) => (
              <a
                key={p.slug}
                href="#projects"
                aria-label={`Jump to ${p.name} in the projects section`}
                className="group block rounded-md border border-foreground/[0.06] bg-foreground/[0.02] p-2.5 transition-all duration-200 hover:border-foreground/[0.14] hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--background)] sm:p-3"
              >
                {/* Thumbnail placeholder */}
                <div className="mb-2.5 aspect-video w-full rounded-sm bg-foreground/[0.05] transition-opacity duration-200 group-hover:opacity-70" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/45 transition-colors duration-200 group-hover:text-foreground/70">
                  {p.name}
                </p>
                <p className="tabular-nums text-[10px] text-foreground/25">{p.year}</p>
              </a>
            ))}
          </div>

          {/* Scroll nudge */}
          <div
            className="animate-fade-in-up flex items-center gap-3"
            aria-hidden="true"
            style={{ animationDelay: "560ms" }}
          >
            <div className="h-px w-8 bg-foreground/20" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
