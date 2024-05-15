import { Space, DatePicker } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
const DatePickerComponent = ({ date }) => {
  const firstDate = date.slice(0, 10);
  const secondDate = date.slice(12).trim();  
  const onCalendarChange = (dates, dateStrings) => {
    console.log(dates);
    console.log(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      {date && <RangePicker onCalendarChange={onCalendarChange} defaultValue={[dayjs(firstDate), dayjs(secondDate)]}/>}
    </Space>
  );
};
export default DatePickerComponent;
