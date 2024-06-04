import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRound = ({size, onBtnClick}) => {
  const btnSize= {
    big: 'sm:w-10 sm:h-10', 
    small: 'sm:w-7 sm:h-7'
  }
  return (
    <button onClick={onBtnClick}
      className={`BUTTON-ROUND group-hover:translate-x-3 duration-300`}>
      <img src={arrowCircle} alt="arrow-circle-icon" className={`${btnSize[size]}`} />
    </button>
  );
};

export default ButtonRound;
