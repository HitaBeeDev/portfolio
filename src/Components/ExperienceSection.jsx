import { useState } from "react";
import jobTabContents from "./jobTabContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import TitleOfSection from "./TitleOfSection";

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className=" gap-10 mt-32 lg:mt-40">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-2 bg-color1"></div>

        <div className="lg:p-10 lg:pb-16 lg:pr-16 lg:col-span-10 p-3 border-t lg:h-[25rem] h-[33rem] border-color2">
          <TitleOfSection span={0.2} title="My Career Highlights:" />

          <div className="lg:grid lg:grid-cols-12 gap-20 mt-10">
            <div className="lg:border-l border-b lg:border-b-0 border-color3 h-fit col-span-3 w-fit flex lg:flex-col justify-between flex-row lg:gap-3">
              {jobTabContents.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    index === activeTab
                      ? "transition-all bg-color2 rounded-tr-[0.3rem] lg:rounded-tl-[0rem] rounded-tl-[0.3rem] lg:rounded-br-[0.3rem] lg:rounded-tr-[0.3rem] duration-500 font-semibold border-b-2 lg:border-b-0 lg:border-l-2 border-color4"
                      : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <p className="h-12 w-44 text-color5 lg:text-[0.82rem] text-[0.75rem] flex justify-center items-center">
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
                      className="flex flex-row items-center mt-3 gap-4 text-sm text-color3"
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
      </div>
    </section>
  );
}

export default AboutSection;
