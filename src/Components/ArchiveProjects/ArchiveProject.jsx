import archiveProjectOneImg from "../../assets/C-1.png";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchiveProject() {
  const archiveProjectsTools = [
    {
      projectOne: ["React", "Tailwind CSS", "Material-UI", "Framer Motion"],
    },
    {
      projectTwo: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <div className="bg-color2 flex flex-col gap-5 p-5 justify-center items-center bg-opacity-10 rounded-[0.3rem] shadow-xl h-[23rem] backdrop-blur-sm backdrop-filter">
      <div className="flex flex-row gap-3 justify-end w-full">
        <div>
          <a
            href="https://github.com/HitaBeeDev/skyQuest"
            target="_blank"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-color4 text-sm transition-all duration-500 hover:text-color5"
              icon={faGithub}
            />
          </a>
        </div>

        <div>
          <a
            href="https://sky-quest-adventures.vercel.app/"
            target="_blank"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-color4 text-sm transition-all duration-500 hover:text-color5"
              icon={faArrowUpRightFromSquare}
            />
          </a>
        </div>
      </div>

      <img className="w-2/3" src={archiveProjectOneImg} />

      <div className="">
        <p className="text-sm text-color4 font-semibold">SkyQuest</p>

        <p className="text-[0.75rem] text-color5 font-normal mt-2">
          A flight search app with React, Vite, Tailwind CSS, Material-UI, and
          Framer Motion. Simplifying booking with intuitive interfaces, smooth
          animations, and essential features.
        </p>

        <ul className="flex flex-row text-[0.68rem] gap-x-3 gap-y-2 flex-wrap mt-3">
          {archiveProjectsTools[0].projectOne.map((tech, index) => (
            <li
              key={index}
              className="border-color2 border text-color3 rounded-[0.3rem] p-1 h-5 flex items-center"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArchiveProject;
