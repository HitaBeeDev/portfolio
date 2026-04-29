export function ProjectCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-4 rounded-xl border border-black/8 bg-background p-6 dark:border-white/8"
    >
      {/* Name */}
      <div className="h-4 w-2/5 animate-pulse rounded-md bg-black/8 dark:bg-white/8" />
      {/* Description — two lines */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full animate-pulse rounded-md bg-black/6 dark:bg-white/6" />
        <div className="h-3 w-3/4 animate-pulse rounded-md bg-black/6 dark:bg-white/6" />
      </div>
      {/* Pills */}
      <div className="flex flex-wrap gap-1.5">
        {[56, 72, 48, 64, 52].map((w) => (
          <div
            key={w}
            style={{ width: w }}
            className="h-5 animate-pulse rounded-full bg-black/6 dark:bg-white/6"
          />
        ))}
      </div>
      {/* Buttons */}
      <div className="mt-auto flex gap-2 pt-1">
        <div className="h-8 w-14 animate-pulse rounded-md bg-black/8 dark:bg-white/8" />
        <div className="h-8 w-16 animate-pulse rounded-md bg-black/6 dark:bg-white/6" />
        <div className="h-8 w-24 animate-pulse rounded-md bg-black/6 dark:bg-white/6" />
      </div>
    </div>
  );
}

export function ProjectsSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
