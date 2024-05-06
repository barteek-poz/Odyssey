import { useState } from "react";

const Input = ({ label, placeholder }) => {
  const [value, setValue] = useState();
  
  return (
    <div className="INPUT-BOX flex flex-col">
      <label htmlFor="search-input" className="text-sm px-1 pb-1">
        Destination
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        id="search-input"
        placeholder="Type your destination"
        className="SEARCH-INPUT border border-black rounded-lg w-1/2 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor"
      />
    </div>
  );
};

export default Input;
