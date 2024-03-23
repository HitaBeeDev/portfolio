import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function NavigationShapes({
  topics,
  activeTopicIndex,
  setActiveTopicIndex,
  topicRefs,
}) {
  const scrollToTopic = (index) => {
    const topicElement = topicRefs.current[index].current;
    const yOffset = -80;
    const y =
      topicElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveTopicIndex(index);
  };

  return (
    <div className="hidden gap-5 lg:flex flex-col justify-end items-center w-8 h-screen ml-16 fixed left-0 bottom-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.8 }}
        className="cursor-pointer flex flex-col gap-5"
      >
        {topics.map((topic, index) => (
          <FontAwesomeIcon
            key={`square${index}`}
            icon={faSquare}
            className={`w-3 h-3 ${
              activeTopicIndex === index
                ? "text-color5 rotate-45"
                : "text-color4 rotate-90"
            }`}
            onClick={() => scrollToTopic(index)}
          />
        ))}
      </motion.div>

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
