import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1_Img1 from "../assets/A-1.png";
import project1_Img2 from "../assets/A-2.png";
import project1_Img3 from "../assets/A-3.png";
import project1_Img4 from "../assets/A-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectsSlide() {
  const images = [project1_Img1, project1_Img2, project1_Img3, project1_Img4];

  //   const images = {
  //     project1: [project1_Img1, project1_Img2, project1_Img3, project1_Img4],
  //     project2: [project2_Img1, project2_Img2, project2_Img3],
  //     project3: [project3_Img1, project3_Img2],
  //     project4: [project4_Img1, project4_Img2, project4_Img3, project4_Img4],
  // };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSquareClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
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
  );
}

export default ProjectsSlide;
