import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRound = () => {
  return (
    <div className="flex flex-col items-center ml-10 gap-2 ">
      <button className="BUTTON-ROUND sm:w-12 sm:h-12 hover:translate-x-3 duration-300">
        <img
          src={arrowCircle}
          alt="arrow-circle-icon"
         
        />
      </button>
      <span className="text-sm text-center">View all your travels</span>
    </div>
  );
};

export default ButtonRound;
