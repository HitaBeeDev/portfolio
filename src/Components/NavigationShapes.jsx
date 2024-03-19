import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function NavigationShapes({ activeDot, handleDotClick }) {
  return (
    <div className="flex flex-col justify-end items-center w-8 h-screen ml-12 fixed left-0 bottom-0">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`cursor-pointer my-2`}
          onClick={() => handleDotClick(index)}
        >
          <FontAwesomeIcon
            icon={faSquare}
            className={`w-3 h-3 ${
              activeDot === index + 2 ? "text-color4 rotate-45" : "text-color3"
            }`}
          />
        </div>
      ))}
      <div className="border-[0.5px] border-color4 w-52 mt-32 rotate-90"></div>
    </div>
  );
}

export default NavigationShapes;
