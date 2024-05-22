import deleteIcon from "../assets/delete.svg";
const DeleteButton = ({ onClick, display}) => {
  const isVisible = {
    visible: 'visible', 
    invisible: 'invisible'
  }
  return (
    <button className="DELETE-BUTTON" onClick={onClick}>
      <img
        src={deleteIcon}
        alt="delete-icon"
        className={`${isVisible[display]} cursor-pointer hover:scale-110 group-hover:visible`}
      />
    </button>
  );
};

export default DeleteButton;
