import TitleOfSection from "../UI/TitleOfSection";
import archiveProjectOneImg from "../../assets/C-1.png";

function ArchiveProjects() {
  const archiveProjectOne = [
    "React",
    "Tailwind CSS",
    "Material-UI",
    "Framer Motion",
  ];

  return (
    <section
      id="archive-projects"
      className="mt-32 lg:mt-40 lg:p-10 p-3 border-b border-color2"
    >
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <TitleOfSection span="" title="Other Projects" />

        <a
          className="text-xs text-color4 hover:underline hover:underline-offset-4 transition-all duration-500"
          href="https://github.com/HitaBeeDev"
          target="_blank"
        >
          Check my Github
        </a>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="bg-color2 flex flex-col gap-5 p-5 justify-center items-center bg-opacity-10 rounded-[0.3rem] shadow-xl h-[20rem] backdrop-blur-sm backdrop-filter">
          <img className="w-2/3" src={archiveProjectOneImg} />

          <div className="">
            <p className="text-sm text-color4 font-semibold">SkyQuest</p>

            <p className="text-[0.75rem] text-color5 font-normal mt-2">
              A flight search app with React, Vite, Tailwind CSS, Material-UI,
              and Framer Motion. Simplifying booking with intuitive interfaces,
              smooth animations, and essential features.
            </p>

            <ul className="flex flex-row text-[0.68rem] gap-x-3 gap-y-2 flex-wrap mt-3">
              {archiveProjectOne.map((tech, index) => (
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

        <div className="bg-color2">Item 1</div>

        <div className="bg-color3">Item 2</div>

        <div className="bg-color4">Item 3</div>

        <div className="bg-color5">Item 4</div>

        <div className="bg-color2">Item 5</div>
      </div>
    </section>
  );
}

export default ArchiveProjects;
