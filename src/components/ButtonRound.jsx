import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRound = () => {
  return (
    <button
      className={`BUTTON-ROUND hover:translate-x-3 duration-300`}>
      <img src={arrowCircle} alt="arrow-circle-icon" className={`sm:w-8 sm:h-8`} />
    </button>
  );
};

export default ButtonRound;
