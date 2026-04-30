import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

// Prose-styled MDX components for case study pages.
// Applied automatically by Next.js when rendering .mdx files.
const components: MDXComponents = {
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 break-words text-xl font-bold tracking-tight sm:mt-14 sm:text-2xl"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 break-words text-lg font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),

  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-5 leading-[1.75] text-foreground/80 [overflow-wrap:anywhere]"
      {...props}
    >
      {children}
    </p>
  ),

  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-5 list-disc pl-5 leading-[1.75] text-foreground/80 sm:pl-6 [&>li]:mb-1.5"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-5 list-decimal pl-5 leading-[1.75] text-foreground/80 sm:pl-6 [&>li]:mb-1.5"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-[1.75]" {...props}>
      {children}
    </li>
  ),

  // Code block (triple backtick)
  pre: ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-6 max-w-full overflow-x-auto rounded-lg border border-black/8 bg-black/[0.03] p-3 text-xs leading-relaxed dark:border-white/8 dark:bg-white/[0.04] sm:p-4 sm:text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Inline code (single backtick)
  code: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-black/6 px-1.5 py-0.5 font-mono text-[0.875em] text-foreground [overflow-wrap:anywhere] dark:bg-white/10"
      {...props}
    >
      {children}
    </code>
  ),

  blockquote: ({ children, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-5 border-l-4 border-foreground/20 pl-4 italic text-foreground/65 [&>p]:mb-0"
      {...props}
    >
      {children}
    </blockquote>
  ),

  a: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="font-medium underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-sm"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  },

  strong: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),

  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-12 border-black/8 dark:border-white/8"
      {...props}
    />
  ),

  // Tables (GFM)
  table: ({ children, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="mb-6 max-w-full overflow-x-auto rounded-lg border border-black/8 dark:border-white/8">
      <table className="w-max min-w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-black/8 bg-black/[0.02] dark:border-white/8 dark:bg-white/[0.02]" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-3 py-2.5 text-left font-semibold text-foreground sm:px-4"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border-t border-black/5 px-3 py-2.5 text-foreground/75 dark:border-white/5 sm:px-4"
      {...props}
    >
      {children}
    </td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
