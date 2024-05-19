import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRoundSmall = (props) => {
  const size = props.size
  return (
    <button
      className={`BUTTON-ROUND group-hover:translate-x-3 duration-300`}>
      <img src={arrowCircle} alt="arrow-circle-icon" className={`sm:w-7 sm:h-7`} />
    </button>
  );
};

export default ButtonRoundSmall;
