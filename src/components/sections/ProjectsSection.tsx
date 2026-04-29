"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/project";

type FilterValue = ProjectCategory | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "open-source", label: "Open Source" },
  { value: "design-systems", label: "Design Systems" },
];

export function ProjectsSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawFilter = searchParams.get("filter") ?? "all";
  const activeFilter: FilterValue = FILTERS.some((f) => f.value === rawFilter)
    ? (rawFilter as FilterValue)
    : "all";

  const setFilter = useCallback(
    (value: FilterValue) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete("filter");
      } else {
        params.set("filter", value);
      }
      const query = params.toString();
      router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-t border-black/5 py-24 dark:border-white/5"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        id="projects-heading"
        title="Projects"
        subtitle="A handful of things I've built — depth over breadth."
      />

      {/* Filter bar */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {FILTERS.map(({ value, label }) => {
          const isActive = value === activeFilter;
          return (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={isActive}
              className={[
                "inline-flex h-8 items-center rounded-full px-4 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
                isActive
                  ? "bg-foreground text-background"
                  : "border border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid or empty state */}
      {filtered.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <p className="text-base font-medium">No projects in this category yet.</p>
          <button
            onClick={() => setFilter("all")}
            className="text-sm text-foreground/60 underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            View all projects
          </button>
        </div>
      )}
    </section>
  );
}
