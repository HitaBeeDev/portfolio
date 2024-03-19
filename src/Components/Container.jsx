import { useState, useEffect } from "react";
import Navbvar from "../Navbar/Navbvar";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import SocialIcons from "./SocialIcons";
import NavigationShapes from "./NavigationShapes";

function Container() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
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
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between relative">
        <NavigationShapes
          activeDot={activeDot}
          handleDotClick={handleDotClick}
        />

        <SocialIcons />
      </div>

      <div>
        <Navbvar />

        <HomeSection />

        <section id="topic1">
          <AboutSection />
        </section>

        <section
          id="topic2"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color3"
        >
          topic2
        </section>

        <section
          id="topic3"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color2"
        >
          topic3
        </section>

        <section
          id="topic4"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color5"
        >
          topic4
        </section>

        <section
          id="topic5"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color4"
        >
          topic5
        </section>
      </div>
    </div>
  );
}

export default Container;
