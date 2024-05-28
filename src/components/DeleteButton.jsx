import deleteIcon from "../assets/delete.svg";
const DeleteButton = ({ onBtnClick, display}) => {
  const isVisible = {
    visible: 'visible', 
    invisible: 'invisible'
  }
  return (
    <button className="DELETE-BUTTON" onClick={onBtnClick}>
      <img
        src={deleteIcon}
        alt="delete-icon"
        className={`${isVisible[display]} cursor-pointer hover:scale-110 group-hover:visible`}
      />
    </button>
  );
};

export default DeleteButton;
