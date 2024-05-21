import checkIcon from "../assets/check.svg";
const CheckButton = ({ onClick, display}) => {
  const isHidden = {
    hidden: 'hidden', 
    block: ''
  }
  return (
    <button onClick={onClick} className="CHECK-BUTTON">
      <img
        src={checkIcon}
        alt="check-icon"
        className={`${isHidden[display]} cursor-pointer duration-300 hover:scale-110 group-hover:block`}
      />
    </button>
  );
};
export default CheckButton;
