const ExpenseInput = ({placeholder, type}) => {
  return (
    <div className="EXPENSE-INPUT">
      <input type={type}  className="SEARCH-INPUT text-center border border-black rounded-lg w-28 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor" placeholder={placeholder} />
    </div>
  );
};

export default ExpenseInput;
