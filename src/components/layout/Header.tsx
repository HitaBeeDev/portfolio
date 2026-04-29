import Link from "next/link";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[0.07] bg-[var(--background)]/90 backdrop-blur-md dark:border-white/[0.07]">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Monogram */}
        <Link
          href="/"
          className="inline-flex size-8 items-center justify-center rounded-sm border border-[var(--accent)]/25 bg-[var(--accent)]/10 text-[13px] font-bold tracking-tight text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Anahita Amiri — home"
        >
          AA
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <DarkModeToggle />
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
