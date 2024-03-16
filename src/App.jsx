import "./index.css";
import { useState } from "react";

const App = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
    const section = document.getElementById(`topic${index + 1}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col fixed left-4 top-4">
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
      <div className="mt-16">
        {/* Topic 1 */}
        <section
          id="topic1"
          className="h-screen bg-gray-100 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 1</h1>
        </section>
        {/* Topic 2 */}
        <section
          id="topic2"
          className="h-screen bg-gray-200 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 2</h1>
        </section>
        {/* Topic 3 */}
        <section
          id="topic3"
          className="h-screen bg-gray-300 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 3</h1>
        </section>
        {/* Topic 4 */}
        <section
          id="topic4"
          className="h-screen bg-gray-400 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 4</h1>
        </section>
        {/* Topic 5 */}
        <section
          id="topic5"
          className="h-screen bg-gray-500 flex items-center justify-center"
        >
          <h1 className="text-4xl">Topic 5</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
