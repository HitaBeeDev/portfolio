import { useState } from "react";
import jobTabContents from "./jobTabContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="lg:grid lg:grid-cols-12 gap-10 mt-32 lg:mt-40"
    >
      <div className="lg:col-span-2 bg-color1"></div>

      <div className="lg:p-10 lg:pb-16 lg:pr-16 lg:col-span-10 p-3 border-r border-b lg:h-[25rem] h-[33rem] border-color3">
        <p className="lg:text-4xl text-xl text-color3 font-semibold tracking-widest">
          <span className="text-color4 font-medium lg:text-2xl text-lg">
            02.{" "}
          </span>{" "}
          My Career Highlights
        </p>

        <div className="lg:grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:border-l border-b lg:border-b-0 border-color3 h-fit col-span-3 w-fit flex lg:flex-col justify-between flex-row lg:gap-3">
            {jobTabContents.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  index === activeTab
                    ? "transition-all bg-color2 lg:rounded-r-[0.3rem] rounded-t-[0.3rem] duration-500 font-semibold border-b-2 lg:border-l-2 border-color4"
                    : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p className="h-12 w-32 text-color5 lg:text-[0.82rem] text-[0.75rem] flex justify-center items-center">
                  {tab.jobFirm}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-9 mt-5 lg:mt-0">
            <p className="text-[1.2rem] font-semibold text-color4">
              {jobTabContents[activeTab].jobPosition}
            </p>

            <p className="text-sm text-color2 mt-2">
              {jobTabContents[activeTab].jobDate}
            </p>

            <ul className="mt-3">
              {jobTabContents[activeTab].jobBulletPoints.map(
                (bullet, bulletIndex) => (
                  <li
                    className="flex flex-row items-center gap-2 text-sm mt-2 text-color3"
                    key={bulletIndex}
                  >
                    <FontAwesomeIcon className="w-2 h-2" icon={faDiamond} />
                    {bullet}
                  </li>
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
