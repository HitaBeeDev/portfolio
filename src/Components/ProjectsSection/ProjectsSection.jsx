import TitleOfSection from "../UI/TitleOfSection";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-16 gap-10 lg:p-10 p-3 border-l border-color2"
    >
      <TitleOfSection span={0.3} title="Some projects I've built:" />

      <ProjectOne />

      <ProjectTwo />
    </section>
  );
}

export default ProjectsSection;
