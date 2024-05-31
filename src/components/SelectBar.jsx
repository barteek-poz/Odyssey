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
  const [blurError, setBlurError] = useState(false);

  const blurErrorValidation = () => {
    console.log(value);
    if (!value) {
      setBlurError(true);
    } else setBlurError(false);
  };
  const selectHandler = (selectValue) => {
    if (setCategoryValue) {
      setCategoryValue(selectValue);
      setBlurError(false);
    }
    setValue(selectValue);
    setBlurError(false);
  };
  return (
    <div className="flex items-center">
      {label && <label className="text-placeholderColor pr-9">{label}</label>}
      <Select
        onChange={(selectValue) => {
          selectHandler(selectValue);
          if (setFormError) {
            setFormError(false);
          }
        }}
        onBlur={blurErrorValidation}
        defaultValue={value}
        placeholder={placeholder}
        status={blurError ? "error" : ""}
        options={options}
      />
    </div>
  );
};

export default SelectBar;
