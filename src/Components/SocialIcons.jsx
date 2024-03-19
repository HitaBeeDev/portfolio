import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div>
      <FontAwesomeIcon className="text-color4 text-xl" icon={faGithub} />
      <FontAwesomeIcon className="text-color4 text-xl" icon={faLinkedin} />
    </div>
  );
}

export default SocialIcons;
