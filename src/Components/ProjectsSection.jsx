import TitleOfSection from "./TitleOfSection";

import Projects from "./Projects";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-32 lg:mt-40 gap-10 lg:p-10 p-5 border-l border-color2"
    >
      <TitleOfSection span={0.3} title="Some projects I've built:" />

      <Projects />
    </section>
  );
}

export default ProjectsSection;
