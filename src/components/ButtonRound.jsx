import arrowCircle from "../assets/arrow-circle.svg";
const ButtonRound = ({size, onBtnClick}) => {
  const btnSize= {
    big: 'w-10 h-10', 
    small: 'w-7 h-7'
  }
  return (
    <button onClick={onBtnClick}
      className={`BUTTON-ROUND group-hover:translate-x-3 duration-300`}>
      <img src={arrowCircle} alt="arrow-circle-icon" className={`${btnSize[size]}`} />
    </button>
  );
};

export default ButtonRound;
