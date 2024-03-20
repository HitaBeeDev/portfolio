import { useState } from "react";
import jobTabContents from "./jobTabContents";

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="about"
      className="lg:mr-44 lg:ml-44 lg:grid lg:grid-cols-12 ml-14 mr-14 gap-10 mt-32"
    >
      <div className="lg:col-span-3 bg-color1"></div>

      <div className="lg:p-10 lg:pb-16 lg:pr-16 lg:col-span-9 p-5 border-r border-b h-[28rem] border-color3">
        <p className="lg:text-4xl text-xl text-color3 font-semibold tracking-widest">
          <span className="text-color4 font-medium lg:text-2xl text-lg">
            02.{" "}
          </span>{" "}
          My Career Highlights
        </p>

        <div className="grid grid-cols-12 gap-10 mt-10">
          <div className="border-l border-color3 h-fit col-span-3 flex flex-col gap-3">
            {jobTabContents.map((tab, index) => (
              <div
                key={index}
                className={` cursor-pointer ${
                  index === activeTab
                    ? "transition-all bg-color2 rounded-r-[0.3rem] duration-500 font-semibold border-l-2 border-color4"
                    : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p className="h-12 text-color5 text-[0.82rem] flex justify-center items-center">
                  {tab.jobFirm}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-9">
            <p>{jobTabContents.jobPosition}</p>
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
