const DetailsInput = ({ label, placeholder }) => {
  return (
    <div className="DETAILS-INPUT flex items-center ">
      <label htmlFor={label} className="text-placeholderColor pr-1">{label}:</label>
      <input
        type="text"
        name={label}
        className="outline-outlineColor min-w-72 rounded-lg px-1 outline-1 text-black placeholder-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DetailsInput;
