import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1_Img1 from "../assets/A-1.png";
import project1_Img2 from "../assets/A-2.png";
import project1_Img3 from "../assets/A-3.png";
import project1_Img4 from "../assets/A-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const images = [project1_Img1, project1_Img2, project1_Img3, project1_Img4];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSquareClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="lg:grid lg:grid-cols-12 mt-10 gap-10">
      <div className="lg:col-span-7 flex justify-center items-center">
        <div className="rounded-[0.3rem] w-full h-[20rem] relative overflow-hidden">
          <AnimatePresence initial={false} custom={selectedImageIndex}>
            {images.map(
              (image, index) =>
                index === selectedImageIndex && (
                  <motion.img
                    key={index}
                    className="rounded-[0.3rem] absolute top-0 left-0"
                    src={image}
                    alt={`Project ${index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      scale: selectedImageIndex === index ? 1 : 0.5,
                    }}
                  />
                )
            )}
          </AnimatePresence>

          <div className="flex flex-row gap-3 absolute bottom-2 left-1/2 transform -translate-x-1/2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  index === selectedImageIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleSquareClick(index)}
              >
                <FontAwesomeIcon
                  className="text-color3 w-3 h-3 hover:text-color4 transition-all duration-300"
                  icon={faSquare}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-end items-center">
        <div className="h-full p-3 flex flex-col justify-between items-end">
          <p className="text-3xl font-semibold text-color4">NexStep</p>

          <p className="text-sm text-right text-color5 bg-color2/30 p-5 rounded-[0.3rem]">
            Enhanced React Productivity Dashboard combines a Habit Tracker,
            To-Do List, and Pomodoro Timer into a single, streamlined
            application. Designed for efficiency and ease of use, it's the
            perfect tool for anyone looking to improve their productivity and
            focus.
          </p>

          <ul className="flex flex-row text-color4 text-sm justify-center items-start gap-5 w-full flex-wrap">
            <li className="border-color2 border rounded-[0.3rem] text-color3 text-xs p-2 h-6 flex items-center">
              react
            </li>

            <li className="border-color2 border rounded-[0.3rem] text-color3 text-xs p-2 h-6 flex items-center">
              react
            </li>

            <li className="border-color2 border rounded-[0.3rem] text-color3 text-xs p-2 h-6 flex items-center">
              react
            </li>

            <li className="border-color2 border rounded-[0.3rem] text-color3 text-xs p-2 h-6 flex items-center">
              react
            </li>
          </ul>

          <div className="flex flex-row gap-3">
            <a>
              <FontAwesomeIcon
                className="text-color4 w-3 h-3 hover:text-color4 transition-all duration-300"
                icon={faSquare}
              />
            </a>

            <a>
              <FontAwesomeIcon
                className="text-color4 w-3 h-3 hover:text-color4 transition-all duration-300"
                icon={faSquare}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
