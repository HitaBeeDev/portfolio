export type ProjectCategory =
  | "frontend"
  | "full-stack"
  | "open-source"
  | "design-systems";

export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  hasCaseStudy: boolean;
}
