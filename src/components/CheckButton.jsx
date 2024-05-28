import checkIcon from "../assets/check.svg";
const CheckButton = ({ onBtnClick, display}) => {
  const isVisible = {
    visible: 'visible', 
    invisible: 'invisible'
  }
  return (
    <button onClick={onBtnClick} className="CHECK-BUTTON">
      <img
        src={checkIcon}
        alt="check-icon"
        className={`${isVisible[display]} cursor-pointer hover:scale-110 group-hover:visible`}
      />
    </button>
  );
};
export default CheckButton;
