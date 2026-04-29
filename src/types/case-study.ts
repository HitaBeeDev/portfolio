export interface CaseStudyMeta {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  tags: string[];
}

export interface MDXCaseStudy {
  default: React.ComponentType;
  meta: CaseStudyMeta;
}
