import { Select } from "antd";
const SelectBar = ({ placeholder, options }) => {
  return (
    <div>
      <label className="text-placeholderColor pr-4">Form of transport</label>
      <Select
        placeholder={placeholder}
        style={{ borderColor: "black" }}
        options={options}
      />
    </div>
  );
};

export default SelectBar;
