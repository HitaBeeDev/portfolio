import { useState, useEffect } from "react";
import Navbvar from "./Navbar/Navbvar";
import AboutSection from "./AboutSection/AboutSection";
import HomeSection from "./Home/HomeSection";
import SocialIcons from "./Home/SocialIcons";
import NavigationShapes from "./Home/NavigationShapes";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection";

function Container() {
  const [activeDot, setActiveDot] = useState(0);

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
      setActiveDot(activeIndex);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    setActiveDot(index);
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
    <ContactSection key="contact" />,
  ];

  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:relative">
        <NavigationShapes
          activeDot={activeDot}
          handleDotClick={handleDotClick}
        />
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
