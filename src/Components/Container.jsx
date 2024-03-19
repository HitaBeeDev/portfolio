import { useState, useEffect } from "react";
import Navbvar from "../Navbar/Navbvar";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import SocialIcons from "./SocialIcons";

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
        <div className="flex flex-col justify-center items-center h-screen bg-red-100 ml-12 fixed left-0">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full my-2 ${
                activeDot === index ? "bg-color4" : "bg-color2"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center h-screen bg-red-200 mr-12 fixed right-0">
          <SocialIcons />
        </div>
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
          <AboutSection />
        </section>

        <section
          id="topic3"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color2"
        >
          <AboutSection />
        </section>

        <section
          id="topic4"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color5"
        >
          <AboutSection />
        </section>

        <section
          id="topic5"
          className="mr-32 ml-32 h-screen flex justify-center items-center bg-color4"
        >
          <AboutSection />
        </section>
      </div>
    </div>
  );
}

export default Container;
