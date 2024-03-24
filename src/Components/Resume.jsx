import resume from "../assets/resume.pdf";

function Resume() {
  const downloadResume = () => {
    const resumeUrl = resume;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "your_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-3 w-24 h-10 flex justify-center items-center border-2 rounded-[0.3rem] border-color3 transition-all duration-500 hover:border-color4 hover:bg-color4 shadow-xl">
      <button
        className="text-sm font-semibold text-color4 transition-all duration-500 hover:text-color1"
        onClick={downloadResume}
      >
        Resume
      </button>
    </div>
  );
}

export default Resume;
