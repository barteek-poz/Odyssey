import { useState } from "react";

const ExpenseInput = ({ placeholder, type, setValue, setFormError }) => {
  const [blurError, setBlurError] = useState(null);
  const errorValidation = (e) => {
    if (e.target.value.trim().length === 0) {
      setBlurError(true);
    } else setError(false);
  };
  const inputHandler = (e) => {
    if (setFormError) {
      setFormError(false);
    }
    setValue(e.target.value);
    setBlurError(false);
  };
  return (
    <div className="EXPENSE-INPUT">
      <input
        onBlur={errorValidation}
        onChange={(e) => {
          inputHandler(e);
        }}
        type={type}
        className={
          blurError
            ? "SEARCH-INPUT text-center border-2 border-red-600 rounded-lg w-28 h-8 px-1.5 outline-1 outline-red-600 placeholder-red-600"
            : "SEARCH-INPUT text-center border border-black rounded-lg w-28 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor"
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default ExpenseInput;
