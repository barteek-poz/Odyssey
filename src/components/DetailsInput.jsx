import { useState } from "react";

const DetailsInput = ({ label, placeholder, initialValue }) => {
  const [value, setValue] = useState(initialValue)
  return (
    <div className="DETAILS-INPUT flex items-center ">
      <label htmlFor={label} className="text-placeholderColor pr-1 w-40">
        {label}:
      </label>
      <input
        type="text"
        name={label}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className="outline-outlineColor min-w-64 rounded-lg px-1 outline-1 text-black placeholder-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DetailsInput;
