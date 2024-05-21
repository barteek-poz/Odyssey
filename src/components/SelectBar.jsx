import { Select } from "antd";
import { useState } from "react";
const SelectBar = ({ label, placeholder, options, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex items-center">
      {label && <label className="text-placeholderColor pr-9">{label}</label>}
      <Select
        defaultValue={value}
        placeholder={placeholder}
        style={{ borderColor: "black" }}
        options={options}
      />
    </div>
  );
};

export default SelectBar;
