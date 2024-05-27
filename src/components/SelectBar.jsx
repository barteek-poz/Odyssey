import { Select } from "antd";
import { useState } from "react";
const SelectBar = ({
  label,
  placeholder,
  options,
  initialValue,
  setCategoryValue,
  setFormError,
}) => {
  const [value, setValue] = useState(initialValue);
  const selectHandler = (selecValue) => {
    if (setCategoryValue) {
      setCategoryValue(selecValue);
    } 
    setValue(selecValue);
  };
  return (
    <div className="flex items-center">
      {label && <label className="text-placeholderColor pr-9">{label}</label>}
      <Select
        onChange={(selectValue) => {
          selectHandler(selectValue);
          setFormError(false)
        }}
        defaultValue={value}
        placeholder={placeholder}
        style={{ borderColor: "black" }}
        options={options}
      />
    </div>
  );
};

export default SelectBar;
