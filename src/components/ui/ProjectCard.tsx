import Link from "next/link";
import type { Project } from "@/types/project";
import { TechPill } from "./TechPill";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-black/8 bg-background p-6 transition-shadow hover:shadow-md dark:border-white/8">
      {/* Name + description */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold leading-snug tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/65">
          {project.description}
        </p>
      </div>

      {/* Tech stack pills */}
      <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechPill label={tech} />
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
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-xs font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            aria-label={`${project.name} — live site`}
          >
            {/* Arrow-up-right icon */}
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Live
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-black/12 px-3 text-xs font-semibold transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/12 dark:hover:bg-white/5"
            aria-label={`${project.name} — GitHub repository`}
          >
            {/* GitHub mark */}
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            GitHub
          </a>
        )}

        {project.hasCaseStudy && (
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-black/12 px-3 text-xs font-semibold transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/12 dark:hover:bg-white/5"
          >
            Case Study →
          </Link>
        )}
      </div>
    </article>
  );
}
