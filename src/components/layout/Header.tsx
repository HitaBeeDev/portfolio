import Link from "next/link";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  // { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-background/80 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          Anahita Amiri
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex md:gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Right side: dark mode + hamburger */}
        <div className="flex items-center gap-1">
          <DarkModeToggle />
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
