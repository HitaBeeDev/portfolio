import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
        404
      </p>

      <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold tracking-tight">
        Page not found
      </h1>

      <p className="max-w-sm text-base text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </main>
  );
}
