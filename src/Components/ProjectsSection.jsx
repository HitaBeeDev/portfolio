import TitleOfSection from "./TitleOfSection";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-32 lg:mt-40  gap-10 lg:p-10 p-5 border-l border-color2"
    >
      <TitleOfSection span={0.3} title="Some projects I've built:" />

      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 bg-color2">gggg</div>

        <div className="lg:col-span-4 bg-color3">nnnn</div>
      </div>
    </section>
  );
}

export default ProjectsSection;
