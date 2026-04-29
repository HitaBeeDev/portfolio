import { Suspense } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

function ProjectsSkeleton() {
  return (
    <section
      id="projects"
      className="border-t border-black/[0.07] dark:border-white/[0.07]"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-xl bg-black/[0.04] dark:bg-white/[0.04]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrapper fullWidth>
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
      <SkillsSection />
      <ContactSection />
    </PageWrapper>
  );
}
