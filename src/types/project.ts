export type ProjectCategory =
  | "frontend"
  | "full-stack"
  | "open-source"
  | "design-systems";

export interface Project {
  slug: string;
  name: string;
  /** One-line description of what the project is */
  description: string;
  /** The problem it solved or the challenge it addressed */
  problem?: string;
  stack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  hasCaseStudy: boolean;
}
