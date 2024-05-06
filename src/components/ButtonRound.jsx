import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRound = ({ size }) => {
  return (
    <button
      className={`BUTTON-ROUND w-${size} h-${size} hover:translate-x-3 duration-300`}>
      <img src={arrowCircle} alt="arrow-circle-icon" className={`w-${size} h-${size}`} />
    </button>
  );
};

export default ButtonRound;
