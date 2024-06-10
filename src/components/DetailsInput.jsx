import { useState } from "react";

const DetailsInput = ({
  label,
  placeholder,
  initialValue,
  category,
  type,
  updateDataHandler,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  return (
    <div className="DETAILS-INPUT flex items-center text-sm ">
      <label htmlFor={label} className="text-placeholderColor pr-1 w-36">
        {label}:
      </label>
      <input
        type={type ? type : "text"}
        name={label}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          updateDataHandler(category, inputValue);
        }}
        value={inputValue ? inputValue : ""}
        className="outline-outlineColor min-w-36 md:min-w-52 rounded-lg px-1 outline-1 text-black placeholder-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DetailsInput;
