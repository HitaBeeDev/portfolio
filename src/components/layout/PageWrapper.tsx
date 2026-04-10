import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  /** Stretch to full width and handle padding yourself (e.g. hero sections) */
  fullWidth?: boolean;
  className?: string;
}

/**
 * Constrains page content to max-w-5xl with consistent horizontal padding.
 * Matches the same width/padding used in <Header> and <Footer>.
 */
export function PageWrapper({
  children,
  fullWidth = false,
  className = "",
}: PageWrapperProps) {
  if (fullWidth) {
    return <main id="main-content" className={className}>{children}</main>;
  }

  return (
    <main id="main-content" className={className}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </main>
  );
}
