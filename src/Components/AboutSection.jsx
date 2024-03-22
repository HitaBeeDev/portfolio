import technologies from "./aboutTechnologies";
import aboutMeImg from "../assets/aboutMeImg.png";
import TitleOfSection from "./TitleOfSection";

function AboutSection() {
  return (
    <section id="about" className="gap-10 lg:p-10 p-5 border-r border-color2">
      <TitleOfSection span={0.1} title="About Me" />

      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-9 pr-10">
          <p className="tracking-widest font-thin leading-relaxed lg:text-[0.9rem] text-[0.75rem] lg:mt-7 mt-3 text-color5">
            My name is Anahita, a self-taught frontend developer with a design
            background. Beginning my journey in 2022, I've actively contributed
            to crafting diverse digital products for numerous companies. From
            dynamic marketing websites to intricate enterprise solutions, I
            prioritize delivering swift, refined, and user-friendly experiences.
            <br />
            <br />
            Throughout my career, I've collaborated with talented individuals to
            tailor impactful digital solutions to meet both business and
            consumer needs. Leveraging my extensive experience and profound
            understanding of design principles, I offer a distinctive
            perspective to the development process.
            <br />
            <br />
            My goal isn't just about aesthetics; it's about creating intuitive
            web applications that are user-friendly and accessible. By combining
            design expertise with technical proficiency, I ensure that each
            product I develop provides users with a seamless and delightful
            experience.
          </p>

          <ul className="mt-8 flex flex-row gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <li
                className="border-color2 border flex items-center rounded-[0.3rem] text-color3 text-xs p-2 h-8"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:col-span-3 lg:flex justify-center items-center">
          <div className="h-72 flex justify-center items-center w-full">
            <img className="rounded-md shadow-lg" src={aboutMeImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
