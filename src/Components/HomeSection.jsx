import { motion } from "framer-motion";

function HomeSection() {
  return (
    <section
      id="home"
      className="lg:mr-52 lg:ml-52 flex-col justify-center lg:flex items-start h-screen mt-14 lg:mt-0 ml-14 mr-14"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="lg:text-[1rem] text-xs text-color5 font-normal"
      >
        Hi, my name is
      </motion.p>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="lg:text-[5.5rem] text-[3.5rem] text-color4 font-bold tracking-widest mt-3"
      >
        Anahita
      </motion.p>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="lg:text-[2.5rem] leading-tight	text-2xl tracking-wider font-medium text-color3 mt-2"
      >
        Skilled Frontend Developer with a strong background in design, ensuring
        seamless integration of aesthetics and functionality
      </motion.p>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="text-lg tracking-wider text-color2 font-normal mt-4 mb-10 lg:mr-[7rem]"
      >
        I translate ideas into user-friendly web applications, building the
        front-end with a focus on both creativity and technical excellence.
      </motion.p>
    </section>
  );
}

export default HomeSection;
