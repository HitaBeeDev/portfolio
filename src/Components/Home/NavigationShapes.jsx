import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function NavigationShapes({ activeDot, handleDotClick }) {
  return (
    <div className="hidden lg:flex flex-col justify-end items-center w-8 h-screen ml-16 fixed left-0 bottom-0">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5, delay: index * 0.7 }}
          className={`cursor-pointer my-2`}
          onClick={() => handleDotClick(index)}
        >
          <FontAwesomeIcon
            icon={faSquare}
            className={`w-3 h-3 ${
              activeDot === index + 2 ? "text-color4 rotate-45" : "text-color3"
            }`}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 1.8 }}
        className="border-[0.5px] border-color4 w-52 mt-32 rotate-90"
      ></motion.div>
    </div>
  );
}

export default NavigationShapes;
