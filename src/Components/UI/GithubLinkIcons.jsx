import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// "https://github.com/HitaBeeDev/NexStep-Productivity-Dashboard"

// "https://nexstep.vercel.app/"

function GithubLinkIcons({ hrefGithub, hrefLink }) {
  return (
    <div className="flex flex-row gap-3">
      <a href={hrefGithub} target="_blank" className="cursor-pointer">
        <FontAwesomeIcon
          className="text-color4 text-xl transition-all duration-500 hover:text-color5"
          icon={faGithub}
        />
      </a>

      <a href={hrefLink} target="_blank" className="cursor-pointer">
        <FontAwesomeIcon
          className="text-color4 text-lg transition-all duration-500 hover:text-color5"
          icon={faArrowUpRightFromSquare}
        />
      </a>
    </div>
  );
}

export default GithubLinkIcons;
