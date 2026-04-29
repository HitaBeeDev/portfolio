const CATEGORIES = [
  { label: "Performance", short: "Perf" },
  { label: "Accessibility", short: "A11y" },
  { label: "Best Practices", short: "BP" },
  { label: "SEO", short: "SEO" },
] as const;

interface Props {
  /** PageSpeed Insights report URL — wraps badge in a link when provided */
  url?: string;
}

function Badge() {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
      {CATEGORIES.map(({ label, short }) => (
        <div key={label} className="flex flex-col items-center gap-0.5">
          <span
            className="flex size-7 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-bold text-white"
            aria-label={`${label}: 100`}
          >
            100
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-wide text-foreground/70">
            {short}
          </span>
        </div>
      ))}
      <span className="ml-1 border-l border-black/10 pl-2.5 text-xs font-semibold text-foreground/70 dark:border-white/10">
        Lighthouse
      </span>
    </div>
  );
}

export function LighthouseBadge({ url }: Props) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Lighthouse 100/100 report on PageSpeed Insights"
        className="transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-full"
      >
        <Badge />
      </a>
    );
  }

  return <Badge />;
}
