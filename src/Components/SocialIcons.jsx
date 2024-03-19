import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="w-8 gap-4 flex flex-col justify-end items-center h-screen mr-12 fixed right-0 bottom-0">
      <a href="https://github.com/HitaBeeDev">
        <FontAwesomeIcon className="text-color4 text-xl" icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/anahita-amiri/">
        <FontAwesomeIcon className="text-color4 text-xl" icon={faLinkedin} />
      </a>

      <p className="mt-20 rotate-90 text-color4 text-sm">
        anahita.amiri103@gmail.com
      </p>

      <div className="border-[1px] border-color4 w-48 mt-48 rotate-90"></div>
    </div>
  );
}

export default SocialIcons;
