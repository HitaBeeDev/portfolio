import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="w-8 flex flex-col justify-center items-center gap-4">
      <a href="https://github.com/HitaBeeDev">
        <FontAwesomeIcon className="text-color4 text-xl" icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/anahita-amiri/">
        <FontAwesomeIcon className="text-color4 text-xl" icon={faLinkedin} />
      </a>

      <p className="mt-20 rotate-90 text-color4 text-sm">
        anahita.amiri103@gmail.com
      </p>

      <div className="border-[1px] border-color4 w-32 rotate-90"></div>
    </div>
  );
}

export default SocialIcons;
