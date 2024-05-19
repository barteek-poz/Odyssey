import { Select } from "antd";
import { useState } from "react";
const SelectBar = ({ placeholder, options, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div>
      <label className="text-placeholderColor pr-4">Form of transport</label>
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
