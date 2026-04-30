import { Fragment } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface SkillCategory {
  label: string;
  items: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Redux",
      "React Router",
      "React Query",
      "React Hook Form",
      "Context API",
      "HTML",
      "CSS",
      "SCSS/SASS",
      "Styled Components",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Framer Motion",
      "Chart.js",
      "React Toastify",
    ],
  },
  {
    label: "Backend & Databases",
    items: ["Node.js", "Express.js", "RESTful APIs", "Supabase", "MongoDB"],
  },
  {
    label: "Development Tools",
    items: ["Git", "GitLab", "Netlify", "npm", "Vercel", "Vite", "VS Code", "Yarn"],
  },
  {
    label: "Communication",
    items: ["English", "Turkish", "Persian"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-black/[0.07] dark:border-white/[0.07]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[160px_1fr] lg:gap-20">
          {/* Label column */}
          <div>
            <h2
              id="skills-heading"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted lg:sticky lg:top-24"
            >
              Skills
            </h2>
          </div>

          {/* Content column */}
          <div className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {CATEGORIES.map((cat, i) => (
              <FadeIn key={cat.label} delay={i * 0.05}>
                <div className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-5">
                  {/* Category label */}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted sm:pt-0.5">
                    {cat.label}
                  </span>

                  {/* Skill items — interpunct-separated */}
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {cat.items.map((item, j) => (
                      <Fragment key={item}>
                        {j > 0 && (
                          <span
                            className="mx-1.5 select-none text-muted/40"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                        )}
                        <span>{item}</span>
                      </Fragment>
                    ))}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
