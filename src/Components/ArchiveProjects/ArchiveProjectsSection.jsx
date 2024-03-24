import TitleOfSection from "../UI/TitleOfSection";
import ArchiveProject from "./ArchiveProject";
import archiveProjectsData from "./archiveProjectsData";

function ArchiveProjectsSection() {
  return (
    <section
      id="archive-projects"
      className="mt-32 lg:mt-32 lg:p-10 p-3 border-b border-color2"
    >
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <TitleOfSection span="" title="Other Projects" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {archiveProjectsData.map((project, index) => (
          <ArchiveProject
            key={index}
            hrefGithub={project.githubLink}
            hrefLink={project.liveLink}
            imgSrc={project.image}
            archiveProjectTitle={project.title}
            archiveProjectDescription={project.description}
            projectsTools={[project.tools]}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <a
          className="text-xs text-color4 hover:underline hover:underline-offset-4 transition-all duration-500"
          href="https://github.com/HitaBeeDev"
          target="_blank"
        >
          For further projects, visit my GitHub profile
        </a>
      </div>
    </section>
  );
}

export default ArchiveProjectsSection;
