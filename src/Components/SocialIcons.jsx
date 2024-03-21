import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialIconsLinks from "./socialIconsLinks";
import { motion } from "framer-motion";

function SocialIcons() {
  return (
    <div className="w-8 gap-4 hidden lg:flex flex-col justify-end items-center h-screen mr-16 fixed right-0 bottom-0">
      {socialIconsLinks.map((link, index) => (
        <motion.a
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5, delay: index * 0.7 }}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-color4 text-xl transition-all duration-500 hover:text-color5"
            icon={link.icon}
          />
        </motion.a>
      ))}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 1.8 }}
        className="mt-20 rotate-90 text-color4 text-sm"
      >
        anahita.amiri103@gmail.com
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2 }}
        className="border-[1px] border-color4 w-48 mt-48 rotate-90"
      ></motion.div>
    </div>
  );
}

export default SocialIcons;
