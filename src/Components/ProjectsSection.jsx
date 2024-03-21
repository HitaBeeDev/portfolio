function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-32 lg:mt-40  gap-10 lg:p-10 p-5 border-l border-color2"
    >
      <p className="lg:text-4xl text-xl text-color3 font-semibold tracking-widest">
        <span className="text-color4 font-medium lg:text-2xl text-lg">
          02.{" "}
        </span>{" "}
        Some projects I've built:
      </p>

      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 bg-color2">gggg</div>

        <div className="lg:col-span-4 bg-color3">nnnn</div>
      </div>
    </section>
  );
}

export default ProjectsSection;
