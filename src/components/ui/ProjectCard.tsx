import Link from "next/link";
import type { Project, ProjectCategory } from "@/types/project";

interface Props {
  project: Project;
}

const CATEGORY_ACCENT: Record<ProjectCategory, string> = {
  "design-systems": "rgba(180, 130, 40, 0.65)",
  "full-stack":     "rgba(40, 130, 120, 0.65)",
  "open-source":    "rgba(80, 110, 140, 0.65)",
  "frontend":       "rgba(100, 85, 160, 0.65)",
};

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  "design-systems": "Design System",
  "full-stack":     "Full-Stack",
  "open-source":    "Open Source",
  "frontend":       "Frontend",
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border border-black/[0.08] bg-background p-6 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
      {/* Category colour strip */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: CATEGORY_ACCENT[project.category] }}
        aria-hidden="true"
      />

      {/* Category label + name */}
      <div className="flex flex-col gap-2 pt-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {CATEGORY_LABEL[project.category]}
        </span>
        <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
          {project.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Problem statement */}
      {project.problem && (
        <div className="border-l-2 border-black/[0.08] pl-3 dark:border-white/[0.08]">
          <p className="text-[0.8125rem] leading-relaxed text-foreground/60">
            {project.problem}
          </p>
        </div>
      )}

      {/* Tech stack */}
      <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-black/[0.08] bg-black/[0.03] px-2 py-0.5 text-[11px] font-medium text-foreground/65 dark:border-white/[0.08] dark:bg-white/[0.03]"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} — live site`}
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-xs font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} — GitHub repository`}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-black/[0.1] px-3 text-xs font-semibold transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
          >
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            GitHub
          </a>
        )}
        {project.hasCaseStudy && (
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-black/[0.1] px-3 text-xs font-semibold transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
          >
            Case Study
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
