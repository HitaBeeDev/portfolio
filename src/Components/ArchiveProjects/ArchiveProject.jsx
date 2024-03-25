import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ArchiveIcons from "./ArchiveIcons";

function ArchiveProject({
  hrefGithub,
  hrefLink,
  imgSrc,
  archiveProjectTitle,
  archiveProjectDescription,
  projectsTools,
}) {
  return (
    <div className="bg-color2 flex flex-col gap-5 lg:p-5 p-7 justify-between items-center bg-opacity-10 rounded-[0.3rem] shadow-xl lg:h-[23rem] backdrop-blur-sm backdrop-filter">
      <div className="flex flex-row gap-3 -mt-2 justify-end w-full">
        <ArchiveIcons href={hrefGithub} icon={faGithub} />
        <ArchiveIcons href={hrefLink} icon={faArrowUpRightFromSquare} />
      </div>

      <img className="w-2/3" src={imgSrc} />

      <div className="flex flex-col justify-between">
        <p className="text-sm text-color4 font-semibold">
          {archiveProjectTitle}
        </p>

        <p className="text-[0.75rem] text-color5 font-normal mt-2">
          {archiveProjectDescription}
        </p>

        <ul>
          {projectsTools.map((project, projectIndex) => (
            <li
              key={projectIndex}
              className="flex flex-row gap-2 flex-wrap mt-3"
            >
              {project.map((tech, techIndex) => (
                <p
                  className="border-color2 border text-[0.65rem] text-color3 rounded-[0.3rem] p-1 flex items-center"
                  key={techIndex}
                >
                  {tech}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArchiveProject;
