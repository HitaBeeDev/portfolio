import { useState } from "react";

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const jobTabContents = [
    {
      jobPosition: "Software Engineer",
      jobDate: "January 2020 - Present",
      jobBulletPoints: [
        "Developed new features for a web application using React.js",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Optimized website performance by implementing efficient algorithms",
      ],
    },
    {
      jobPosition: "Product Manager",
      jobDate: "July 2018 - December 2019",
      jobBulletPoints: [
        "Led product development lifecycle from conception to launch",
        "Analyzed market trends and gathered customer feedback to prioritize features",
        "Managed a team of developers and designers to deliver high-quality products",
        "Managed a team of developers and designers to deliver high-quality products",
        "Managed a team of developers and designers to deliver high-quality products",
        "Managed a team of developers and designers to deliver high-quality products",
        "Managed a team of developers and designers to deliver high-quality products",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="lg:mr-44 lg:ml-44 lg:grid lg:grid-cols-12 ml-14 mr-14 gap-10 mt-32"
    >
      <div className="lg:col-span-3 bg-color1"></div>

      <div className="lg:p-10 lg:pb-16 lg:pr-16 lg:col-span-9 p-5 border-r border-b border-color3">
        <p className="lg:text-4xl text-xl text-color3 font-semibold tracking-widest">
          <span className="text-color4 font-medium lg:text-2xl text-lg">
            02.{" "}
          </span>{" "}
          My Career Highlights
        </p>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="border-l border-color2 col-span-3 flex flex-col gap-5">
            {jobTabContents.map((tab, index) => (
              <div
                key={index}
                className={` cursor-pointer ${
                  index === activeTab ? "font-bold border-l border-color5" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p className="h-12 flex justify-center items-center">
                  {tab.jobPosition}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-9">
            <p>{jobTabContents[activeTab].jobDate}</p>
            <ul>
              {jobTabContents[activeTab].jobBulletPoints.map(
                (bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
