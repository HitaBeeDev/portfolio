import { useState, useEffect } from "react";
import Navbvar from "./Navbar/Navbvar";
import AboutSection from "./AboutSection/AboutSection";
import HomeSection from "./Home/HomeSection";
import SocialIcons from "./Home/SocialIcons";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection";
import ArchiveProjects from "./ArchiveProjects/ArchiveProjects";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function Container() {
  const [activeTopic, setActiveTopic] = useState(0);
  const [numTopics, setNumTopics] = useState(0);
  const [rotatedIndex, setRotatedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          activeIndex = index;
        }
      });
      setActiveTopic(activeIndex);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNumTopics(topics.length);
  }, []);

  useEffect(() => {
    if (rotatedIndex !== null) {
      setTimeout(() => {
        setRotatedIndex(activeTopic);
      }, 1000);
    }
  }, [rotatedIndex, activeTopic]);

  const handleDotClick = (index) => {
    setActiveTopic(index);
    setRotatedIndex(index);
    const section = document.getElementById(`topic${index + 1}`);
    if (section) {
      const offset = 70;
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const topics = [
    <HomeSection key="home" />,
    <AboutSection key="about" />,
    <ExperienceSection key="experience" />,
    <ProjectsSection key="projects" />,
    <ArchiveProjects key="archive-projects" />,
    <ContactSection key="contact" />,
  ];

  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:relative">
        <div className="hidden lg:flex flex-col justify-end items-center w-8 h-screen ml-16 fixed left-0 bottom-0">
          {[...Array(numTopics)].map((_, index) => (
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
                  rotatedIndex === index
                    ? "text-color4 rotate-45"
                    : "text-color3"
                }`}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5, delay: 1.8 }}
            className={`border-[0.5px] border-color4 w-52 mt-32 ${
              activeTopic === numTopics - 1 ? "rotate-90" : ""
            }`}
          ></motion.div>
        </div>

        <SocialIcons />
      </div>

      <Navbvar />

      <div className="lg:mr-52 lg:ml-52 ml-5 mr-5">
        {topics.map((topic, index) => (
          <section key={`topic${index + 1}`} id={`topic${index + 1}`}>
            {topic}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Container;
