const AddButton = ({ text, onClick }) => {
  return (
    <button
      className="ADD-BUTTON transform py-0.5 duration-300 border-b border-b-transparent hover:border-b hover:border-b-black"
      onClick={onClick}>
      + {text}
    </button>
  );
};

export default AddButton;
