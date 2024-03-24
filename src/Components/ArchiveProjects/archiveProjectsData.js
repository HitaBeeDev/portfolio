import archiveProjectOneImg from "../../assets/C-1.png";
import archiveProjectsTools from "./archiveProjectsTools";
import archiveProjectTwoImg from "../../assets/D-1.png";
import archiveProjectThreeImg from "../../assets/E-1.png";
import archiveProjectFourImg from "../../assets/F-1.png";
import archiveProjectFiveImg from "../../assets/G-1.png";

const archiveProjectsData = [
  {
    githubLink: "https://github.com/HitaBeeDev/skyQuest",
    liveLink: "https://sky-quest-adventures.vercel.app/",
    image: archiveProjectOneImg,
    title: "SkyQuest",
    description:
      "A flight search app with React, Vite, Tailwind CSS, Material-UI, and Framer Motion. Simplifying booking with intuitive interfaces, smooth animations, and essential features.",
    tools: archiveProjectsTools[0].projectOne,
  },
  {
    githubLink: "https://github.com/HitaBeeDev/Tip-Calculator-Version2",
    liveLink: "https://tip-calculator-version2.vercel.app/",
    image: archiveProjectTwoImg,
    title: "tipCalc",
    description:
      "React-based Tip Calculator, designed to simplify tip calculations based on your bill amount, service ratings, and number of people in your group.",
    tools: archiveProjectsTools[1].projectTwo,
  },
  {
    githubLink: "https://github.com/HitaBeeDev/TravelCheckList-version2",
    liveLink: "https://travel-check-list2.vercel.app/",
    image: archiveProjectThreeImg,
    title: "Travel CheckList",
    description:
      "A user-friendly travel checklist app designed with React and Tailwind CSS for easy planning and organization.",
    tools: archiveProjectsTools[2].projectThree,
  },
  {
    githubLink: "https://github.com/HitaBeeDev/Alpyn-Beauty",
    liveLink: "https://alpyn-beauty.vercel.app/",
    image: archiveProjectFourImg,
    title: "E-Commerce website: Alpyn Beauty",
    description:
      "This is a modern and dynamic online store built using CSS, HTML, and JavaScript.",
    tools: archiveProjectsTools[3].projectFour,
  },

  {
    githubLink: "https://github.com/HitaBeeDev/MealWise",
    liveLink: "https://mealwise.vercel.app/",
    image: archiveProjectFiveImg,
    title: "Meal delivery website: MealWise",
    description:
      "MealWise is a fully responsive meal delivery website crafted with HTML, CSS, and JavaScript.",
    tools: archiveProjectsTools[3].projectFour,
  },
];

export default archiveProjectsData;
