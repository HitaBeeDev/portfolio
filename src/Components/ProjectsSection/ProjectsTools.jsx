function ProjectsTools({ tools }) {
  return (
    <div>
      <ul className="flex flex-row text-color4 text-sm justify-end items-start gap-x-3 gap-y-2 w-full flex-wrap">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="border-color2 border rounded-[0.3rem] text-color3 text-xs p-2 h-6 flex items-center"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsTools;
