"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const EMAIL = "anahita.amiri103@gmail.com";

const LINKS = [
  {
    href: "https://github.com/HitaBeeDev",
    label: "GitHub",
    description: "github.com/HitaBeeDev",
  },
  {
    href: "https://linkedin.com/in/anahita-amiri",
    label: "LinkedIn",
    description: "linkedin.com/in/anahita-amiri",
  },
  {
    href: "/resume.pdf",
    label: "Résumé",
    description: "Download PDF",
    download: true,
  },
] as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      id="contact"
      className="border-t border-black/[0.07] dark:border-white/[0.07]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[160px_1fr] lg:gap-20">
          {/* Label column */}
          <div>
            <h2
              id="contact-heading"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted lg:sticky lg:top-24"
            >
              Contact
            </h2>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-12">
            <FadeIn>
              <div className="flex flex-col gap-5">
                <p className="max-w-sm text-[0.9375rem] leading-[1.7] text-foreground/70">
                  Open to senior frontend roles and interesting consulting work.
                  Currently based in Aachen, Germany — available remotely or in
                  the EU.
                </p>

                {/* Click-to-copy email */}
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-medium text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    className="inline-flex h-7 items-center gap-1.5 rounded-md border border-black/[0.1] px-2.5 text-[11px] font-medium text-muted transition-colors hover:border-black/[0.2] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/[0.1] dark:hover:border-white/[0.2]"
                  >
                    {copied ? (
                      <>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <rect x="4" y="4" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M2 8V2a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Links */}
            <FadeIn delay={0.08}>
              <ul className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {LINKS.map(({ href, label, description, ...rest }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={!("download" in rest) ? "_blank" : undefined}
                      rel={!("download" in rest) ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="flex items-center justify-between py-4 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                    >
                      <span className="font-medium text-foreground">{label}</span>
                      <span className="flex items-center gap-1.5">
                        {description}
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
