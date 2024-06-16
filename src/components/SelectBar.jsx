import { Select } from "antd";
import { useState } from "react";
import CHECK_ICON from "../assets/check.svg";
const SelectBar = ({
  label,
  placeholder,
  options,
  initialValue,
  category,
  setCategoryValue,
  setFormError,
  isCheckIcon
}) => {
  const [value, setValue] = useState(initialValue);
  const [blurError, setBlurError] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const checkIconHandler = () => {
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 1000);
  };

  const blurErrorValidation = () => {
    if (!value) {
      setBlurError(true);
    } else setBlurError(false);
  };

  const onBlurHandler = () =>{
    blurErrorValidation()
    if(isCheckIcon) {
      checkIconHandler()
    }
  }

  const selectHandler = (selectValue) => {
    if (category && setCategoryValue) {
      setCategoryValue(category, selectValue);
      setBlurError(false);
    } else if (setCategoryValue) {
      setCategoryValue(selectValue);
      setBlurError(false);
    } else if (setFormError) {
      setFormError(false);
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
        onBlur={onBlurHandler}
        defaultValue={value}
        placeholder={placeholder}
        status={blurError ? "error" : ""}
        options={options}
        className="w-28"
      />
      {showCheck&&<img src={CHECK_ICON} alt="check-icon" className="ml-2" />}
    </div>
  );
};

export default SelectBar;
