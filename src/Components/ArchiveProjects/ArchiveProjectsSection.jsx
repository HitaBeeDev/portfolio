import TitleOfSection from "../UI/TitleOfSection";
import ArchiveProject from "./ArchiveProject";

function ArchiveProjectsSection() {
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
        <ArchiveProject />

        <div className="bg-color2">Item 1</div>

        <div className="bg-color3">Item 2</div>

        <div className="bg-color4">Item 3</div>

        <div className="bg-color5">Item 4</div>

        <div className="bg-color2">Item 5</div>
      </div>
    </section>
  );
}

export default ArchiveProjectsSection;
