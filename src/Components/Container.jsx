import { useState, useRef, createRef } from "react";
import Navbvar from "./Navbar/Navbvar";
import AboutSection from "./AboutSection/AboutSection";
import HomeSection from "./Home/HomeSection";
import SocialIcons from "./Home/SocialIcons";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection";
import ArchiveProjectsSection from "./ArchiveProjects/ArchiveProjectsSection";
import NavigationShapes from "./Home/NavigationShapes";

function Container() {
  const topics = [
    <HomeSection key="home" />,
    <AboutSection key="about" />,
    <ExperienceSection key="experience" />,
    <ProjectsSection key="projects" />,
    <ArchiveProjectsSection key="archive-projects" />,
    <ContactSection key="contact" />,
  ];

  const topicRefs = useRef(topics.map(() => createRef()));
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:relative">
        <NavigationShapes
          topics={topics}
          activeTopicIndex={activeTopicIndex}
          setActiveTopicIndex={setActiveTopicIndex}
          topicRefs={topicRefs}
        />

        <SocialIcons />
      </div>

      <Navbvar />

      <div className="lg:mr-52 lg:ml-52 ml-5 mr-5">
        {topics.map((topic, index) => (
          <section
            key={`topic${index + 1}`}
            id={`topic${index + 1}`}
            ref={topicRefs.current[index]}
          >
            {topic}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Container;
