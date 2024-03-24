import TitleOfSection from "./UI/TitleOfSection";

function ContactSection() {
  const handleContactClick = () => {
    const emailAddress = "anahita.amiri103@gmail.com";
    const subject = "Hi";
    const body = "Please write your message here.";

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  return (
    <div id="about" className="mt-32 lg:mt-40 lg:p-10 p-3">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <TitleOfSection title="Say hello!" />
      </div>

      <div className="flex justify-center">
        <div className="bg-color3 lg:w-2/3 p-8 mt-10 flex flex-col gap-2 justify-center items-center bg-opacity-10 rounded-[0.3rem] shadow-xl backdrop-blur-sm backdrop-filter">
          <p className="text-color4 text-sm font-normal tracking-widest	leading-loose text-center">
            If you're searching for a frontend developer to join your team, I'm
            here and ready to jump in! Feel free to reach out with any
            questions, proposals, or just to say hello! <br /> Looking forward
            to hearing from you!
          </p>

          <button
            onClick={handleContactClick}
            className="font-semibold text-color5 hover:bg-color1 text-xs mt-10 tracking-widest border border-color2 rounded-[0.3rem] p-3 transition-all duration-500"
          >
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
