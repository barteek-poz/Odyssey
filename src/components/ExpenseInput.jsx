const ExpenseInput = ({ placeholder, type, setValue, setFormError }) => {
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="EXPENSE-INPUT">
      <input
        onChange={(e) => {
          inputHandler(e);
        }}
        onFocus={()=>{setFormError(false)}}
        type={type}
        className="SEARCH-INPUT text-center border border-black rounded-lg w-28 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ExpenseInput;
