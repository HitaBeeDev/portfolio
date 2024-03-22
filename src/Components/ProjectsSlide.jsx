import { useState } from "react";
import { motion } from "framer-motion";
import project1_Img1 from "../assets/A-1.png";
import project1_Img2 from "../assets/A-2.png";
import project1_Img3 from "../assets/A-3.png";
import project1_Img4 from "../assets/A-4.png";

function ProjectsSlide() {
  const images = [project1_Img1, project1_Img2, project1_Img3, project1_Img4];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCircleClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="rounded-[0.3rem] w-full h-[20rem] flex justify-between items-center relative overflow-hidden">
      {images.map((image, index) => (
        <motion.img
          key={index}
          className="rounded-[0.3rem] absolute top-0 left-0"
          src={image}
          alt={`Project ${index + 1}`}
          style={{
            x: `calc(-${selectedImageIndex * 100}% + ${index * 100}%)`,
            pointerEvents: index === selectedImageIndex ? "auto" : "none",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
        />
      ))}

      <div className="flex flex-row gap-3 absolute bottom-2 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 bg-color2 rounded-full cursor-pointer ${
              index === selectedImageIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleCircleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSlide;
