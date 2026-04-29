import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime from "reading-time";
import { projects } from "@/lib/projects";
import type { MDXCaseStudy } from "@/types/case-study";

interface Props {
  params: Promise<{ slug: string }>;
}

const CONTENT_DIR = join(process.cwd(), "src", "content", "projects");

export function generateStaticParams() {
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.slice(0, -4) }));
}

async function loadCaseStudy(slug: string): Promise<MDXCaseStudy | null> {
  try {
    // Webpack bundles all .mdx files matching this pattern at build time.
    const mod = (await import(
      `../../../content/projects/${slug}.mdx`
    )) as unknown as MDXCaseStudy;
    return mod;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = await loadCaseStudy(slug);
  if (!mod) return { title: "Case Study Not Found" };

  const { meta } = mod;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.com";
  const pageUrl = `${siteUrl}/projects/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      type: "article",
      publishedTime: meta.date,
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: { canonical: pageUrl },
  };
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const mod = await loadCaseStudy(slug);
  if (!mod) notFound();

  const { default: Content, meta } = mod;

  // Reading time from raw source (runs at build time)
  const rawSource = readFileSync(join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const { text: readTime } = readingTime(rawSource);

  // Next / Prev based on the ordered projects list
  const idx = projects.findIndex((p) => p.slug === slug);
  const prevProject = idx > 0 ? (projects[idx - 1] ?? null) : null;
  const nextProject =
    idx < projects.length - 1 ? (projects[idx + 1] ?? null) : null;

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded"
        >
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 11L5 7L9 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Projects
        </Link>
      </nav>

      {/* Case study header */}
      <header className="mb-12 flex flex-col gap-5">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>

        <p className="text-lg leading-relaxed text-foreground/70">
          {meta.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/50">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{readTime}</span>
        </div>

        {/* Tags */}
        {meta.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
            {meta.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs font-medium text-foreground/70 dark:border-white/10 dark:bg-white/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* External links */}
        {(meta.liveUrl ?? meta.githubUrl) && (
          <div className="flex flex-wrap gap-2">
            {meta.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                Live Site ↗
              </a>
            )}
            {meta.githubUrl && (
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-black/12 px-4 text-sm font-semibold transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:border-white/12 dark:hover:bg-white/5"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </header>

      {/* MDX prose */}
      <article className="prose-case-study">
        <Content />
      </article>

      {/* Next / Prev navigation */}
      <nav
        aria-label="Case study navigation"
        className="mt-20 flex items-center justify-between gap-4 border-t border-black/5 pt-8 dark:border-white/5"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded"
          >
            <span className="text-xs text-foreground/50 transition-colors group-hover:text-foreground/70">
              ← Previous
            </span>
            <span className="text-sm font-medium transition-colors group-hover:text-foreground/80">
              {prevProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-end gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded"
          >
            <span className="text-xs text-foreground/50 transition-colors group-hover:text-foreground/70">
              Next →
            </span>
            <span className="text-sm font-medium transition-colors group-hover:text-foreground/80">
              {nextProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </main>
  );
}
