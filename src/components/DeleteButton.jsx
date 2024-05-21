import deleteIcon from "../assets/delete.svg";
const DeleteButton = ({ onClick, display }) => {
  const isHidden = {
    hidden: 'hidden', 
    block: ''
  }
  return (
    <button className="DELETE-BUTTON" onClick={onClick}>
      <img
        src={deleteIcon}
        alt="delete-icon"
        className={`${isHidden[display]} cursor-pointer duration-300 hover:scale-110 group-hover:block`}
      />
    </button>
  );
};

export default DeleteButton;
