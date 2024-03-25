import { useState, useEffect } from "react";
import navbarItems from "./navbarItems";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Resume from "../Resume";

function Navbvar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = (id) => {
    setIsNavOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`lg:mt-6 lg:ml-16 lg:mr-16 flex flex-row justify-between ${
        isSticky
          ? "lg:sticky lg:top-0 lg:bg-color1 lg:z-10 lg:pt-4 lg:pb-4"
          : ""
      }`}
    >
      <a href="#home">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="mt-7 ml-5 cursor-pointer lg:w-10 w-7"
          src={logo}
          alt="Logo"
        />
      </a>

      <div className="lg:hidden flex justify-end relative w-8/12">
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-screen bg-color2 gap-12 flex justify-center items-center flex-col"
          >
            <ul className="flex flex-col items-center gap-8">
              {navbarItems.map(({ id, label, span }) => (
                <li key={id}>
                  <a
                    className="text-sm text-color3 font-semibold transition-all duration-500 hover:text-color4"
                    href={`#${id}`}
                  >
                    <span className="text-color4 font-medium text-xs">
                      {span}
                    </span>{" "}
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <Resume />
            </div>
          </motion.div>
        )}

        <FontAwesomeIcon
          className={`cursor-pointer mr-5 mt-7 text-color3 w-5 h-5 absolute ${
            isNavOpen ? "rotate-90" : ""
          }`}
          icon={faBarsStaggered}
          onClick={toggleNav}
        />
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-8">
        <ul className="flex justify-end items-center gap-8">
          {navbarItems.map(({ id, label, span }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <motion.a
                className="text-sm text-color3 font-semibold transition-all duration-500 hover:text-color4"
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                <span className="text-color4 font-medium text-xs">{span}</span>{" "}
                {label}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Resume />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbvar;
