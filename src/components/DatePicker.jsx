import { Space, DatePicker } from "antd";
const { RangePicker } = DatePicker;
const DatePickerComponent = ({date}) => {
  const firstDate = date.slice(0,10)
  const secondDate = date.slice(12).trim()
  const onCalendarChange = (dates, dateStrings) => {
    console.log(dates);
    console.log(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      {date && <RangePicker onCalendarChange={onCalendarChange}/>}
    </Space>
  );
};
export default DatePickerComponent;
