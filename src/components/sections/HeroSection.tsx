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

      {/* Content — constrained to page grid */}
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28">
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

        {/* Scroll nudge */}
        <div
          className="animate-fade-in-up mt-20 flex items-center gap-3"
          aria-hidden="true"
          style={{ animationDelay: "560ms" }}
        >
          <div className="h-px w-8 bg-foreground/20" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
