import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project2_Img1 from "../../assets/B-1.png";
import project2_Img2 from "../../assets/B-2.png";
import project2_Img3 from "../../assets/B-3.png";
import project2_Img4 from "../../assets/B-4.png";
import project2_Img5 from "../../assets/B-5.png";
import project2_Img6 from "../../assets/B-6.png";
import project2_Img7 from "../../assets/B-7.png";
import project2_Img8 from "../../assets/B-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import toolsList from "./toolsList";

import GithubLinkIcons from "../UI/GithubLinkIcons";
import ProjectsTools from "./ProjectsTools";

function ProjectTwo() {
  const images = [
    project2_Img1,
    project2_Img2,
    project2_Img3,
    project2_Img4,
    project2_Img5,
    project2_Img6,
    project2_Img7,
    project2_Img8,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSquareClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="lg:grid lg:grid-cols-12 mt-32 gap-10">
      <div className="lg:hidden block">
        <div className="lg:col-span-7 flex flex-col justify-center items-center">
          <div className="rounded-[0.3rem] w-full lg:h-[20rem] h-[14rem] relative overflow-auto lg:overflow-hidden">
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

            <div className="flex flex-row gap-[0.6rem] absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    index === selectedImageIndex ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => handleSquareClick(index)}
                >
                  <FontAwesomeIcon
                    className="text-color3 lg:w-2 lg:h-2 w-3 h-3 hover:text-color4 transition-all duration-300"
                    icon={faSquare}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-start items-center">
          <div className="h-full p-3 flex flex-col justify-start lg:justify-between gap-3 items-end">
            <p className="text-3xl font-semibold text-color4">wellNest</p>

            <p className="text-sm text-left text-color5 bg-color2/30 p-5 rounded-[0.3rem]">
              WellNest is a wellness platform built with React, Tailwind CSS,
              Framer Motion, and Swiper. It offers personalized plans, self-care
              tips, and mindfulness exercises through a responsive and engaging
              design.
            </p>

            <ProjectsTools tools={toolsList[1].projectTwo} />

            <GithubLinkIcons
              hrefGithub="https://github.com/HitaBeeDev/NexStep-Productivity-Dashboard"
              hrefLink="https://nexstep.vercel.app/"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:col-span-5 lg:flex justify-start items-center">
        <div className="h-full p-3 flex flex-col justify-between items-start">
          <p className="text-3xl font-semibold text-color4">wellNest</p>

          <p className="text-sm text-left text-color5 bg-color2/30 p-5 rounded-[0.3rem]">
            WellNest is a wellness platform built with React, Tailwind CSS,
            Framer Motion, and Swiper. It offers personalized plans, self-care
            tips, and mindfulness exercises through a responsive and engaging
            design.
          </p>

          <ProjectsTools tools={toolsList[1].projectTwo} />

          <GithubLinkIcons
            hrefGithub="https://github.com/HitaBeeDev/wellNest"
            hrefLink="https://well-nest.vercel.app/"
          />
        </div>
      </div>

      <div className="hidden lg:col-span-7 lg:flex justify-center items-center">
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

          <div className="flex flex-row gap-[0.6rem] absolute bottom-2 left-1/2 transform -translate-x-1/2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  index === selectedImageIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleSquareClick(index)}
              >
                <FontAwesomeIcon
                  className="text-color3 w-2 h-2 hover:text-color4 transition-all duration-300"
                  icon={faSquare}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwo;
