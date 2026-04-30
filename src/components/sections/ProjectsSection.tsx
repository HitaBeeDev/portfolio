"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/project";

type FilterValue = ProjectCategory | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  // { value: "full-stack", label: "Full-Stack" },
  // { value: "open-source", label: "Open Source" },
  // { value: "design-systems", label: "Design Systems" },
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
      className="border-t border-black/[0.07] dark:border-white/[0.07]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[160px_1fr] lg:gap-20">
          {/* Label column */}
          <div>
            <h2
              id="projects-heading"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted lg:sticky lg:top-24"
            >
              Selected Work
            </h2>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-10">
            {/* Filter bar */}
            <FadeIn>
              <div
                role="group"
                aria-label="Filter projects by category"
                className="flex flex-wrap gap-2"
              >
                {FILTERS.map(({ value, label }) => {
                  const isActive = value === activeFilter;
                  return (
                    <button
                      key={value}
                      onClick={() => setFilter(value)}
                      aria-pressed={isActive}
                      className={[
                        "inline-flex h-7 items-center rounded-full px-3.5 text-xs font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
                        isActive
                          ? "bg-foreground text-background"
                          : "border border-black/[0.1] text-muted hover:border-black/[0.2] hover:text-foreground dark:border-white/[0.1] dark:hover:border-white/[0.2]",
                      ].join(" ")}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            {/* Grid or empty state */}
            {filtered.length > 0 ? (
              <ul className="grid gap-5 sm:grid-cols-2">
                {filtered.map((project, i) => (
                  <FadeIn key={project.slug} delay={i * 0.06} className="h-full">
                    <li className="h-full">
                      <ProjectCard project={project} />
                    </li>
                  </FadeIn>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-start gap-3 py-16">
                <p className="text-sm text-muted">No projects in this category yet.</p>
                <button
                  onClick={() => setFilter("all")}
                  className="text-sm text-foreground underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  View all projects
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
