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
      className="text-sm font-medium text-foreground/60 transition-colors hover:text-[#4338CA] dark:hover:text-indigo-300"
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-background/82 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo / initials */}
        <Link
          href="/"
          className="inline-flex size-9 items-center justify-center rounded-md border border-[#4F46E5]/20 bg-[#4F46E5]/10 text-sm font-bold tracking-tight text-[#4338CA] transition-colors hover:border-[#4F46E5]/35 hover:bg-[#4F46E5]/15 dark:border-indigo-300/20 dark:bg-indigo-300/10 dark:text-indigo-300 dark:hover:bg-indigo-300/15"
          aria-label="Anahita Amiri home"
        >
          AA
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
