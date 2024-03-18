import { useState, useEffect } from "react";

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
        <div className="flex flex-col justify-center items-center h-screen bg-red-100 ml-24 fixed left-0">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full my-2 ${
                activeDot === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center h-screen bg-red-200 mr-24 fixed right-0">
          <p>TWITTER</p>
          <p>GITHUB</p>
        </div>
      </div>

      <div>
        <section
          id="topic1"
          className="h-screen bg-gray-100 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 1</h1>
        </section>

        <section
          id="topic2"
          className="h-screen bg-gray-200 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 2</h1>
        </section>

        <section
          id="topic3"
          className="h-screen bg-gray-300 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 3</h1>
        </section>

        <section
          id="topic4"
          className="h-screen bg-gray-400 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 4</h1>
        </section>

        <section
          id="topic5"
          className="h-screen bg-gray-500 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 5</h1>
        </section>
      </div>
    </div>
  );
}

export default Container;
