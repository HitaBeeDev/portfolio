import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchiveIcons({ href, icon }) {
  return (
    <div>
      <a href={href} target="_blank" className="cursor-pointer">
        <FontAwesomeIcon
          className="text-color4 text-sm transition-all duration-500 hover:text-color5"
          icon={icon}
        />
      </a>
    </div>
  );
}

export default ArchiveIcons;
