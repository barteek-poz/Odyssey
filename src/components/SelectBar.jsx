import { Select } from "antd";
import { useState } from "react";
const SelectBar = ({
  label,
  placeholder,
  options,
  initialValue,
  category,
  setCategoryValue,
  setFormError,
}) => {
  const [value, setValue] = useState(initialValue);
  const [blurError, setBlurError] = useState(false);

  const blurErrorValidation = () => {
    if (!value) {
      setBlurError(true);
    } else setBlurError(false);
  };
  const selectHandler = (selectValue) => {
    if (category && setCategoryValue) {
      setCategoryValue(category, selectValue);
      setBlurError(false);
    } else if (setCategoryValue) {
      setCategoryValue(selectValue);
      setBlurError(false);
    } else if(setFormError) {
      setFormError(false)
    }
    setValue(selectValue);
    setBlurError(false);
  };
  return (
    <div className="flex items-center">
      {label && <label className="text-placeholderColor pr-6">{label}</label>}
      <Select
        onChange={(selectValue) => {
          selectHandler(selectValue);
        }}
        onBlur={blurErrorValidation}
        defaultValue={value}
        placeholder={placeholder}
        status={blurError ? "error" : ""}
        options={options}
        className="w-28"
      />
    </div>
  );
};

export default SelectBar;
