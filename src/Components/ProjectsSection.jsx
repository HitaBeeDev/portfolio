import TitleOfSection from "./TitleOfSection";
import ProjectsSlide from "./ProjectsSlide";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-32 lg:mt-40 gap-10 lg:p-10 p-5 border-l border-color2"
    >
      <TitleOfSection span={0.3} title="Some projects I've built:" />

      <div className="lg:grid lg:grid-cols-12 mt-10 gap-10">
        <div className="lg:col-span-7 flex justify-center items-center">
          <ProjectsSlide />
        </div>

        <div className="lg:col-span-5 bg-color3">DESCRIPTION</div>
      </div>
    </section>
  );
}

export default ProjectsSection;
