import Link from "next/link";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/HitaBeeDev",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/anahita-amiri",
    label: "LinkedIn",
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/[0.07] dark:border-white/[0.07]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        {/* Left: name + tagline */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-foreground">Anahita Amiri</p>
          <p className="text-sm text-muted">
            Frontend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Aachen, Germany
          </p>
          <p className="mt-1 text-xs text-muted/70">
            Languages: English, Turkish, Persian
          </p>
        </div>

        {/* Right: links */}
        <div className="flex flex-col gap-2">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Résumé (PDF)
          </a>
        </div>
      </div>

      <div className="border-t border-black/[0.05] py-4 text-center text-xs text-muted/60 dark:border-white/[0.05]">
        Built with Next.js · Deployed on Vercel
      </div>
    </footer>
  );
}
