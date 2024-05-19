import { Space, DatePicker } from "antd";
const { RangePicker } = DatePicker;

const HomepageDatePicker = () => {
  const onCalendarChange = (dates, dateStrings) => {
    console.log(dates);
    console.log(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onCalendarChange={onCalendarChange} />
    </Space>
  );
};
export default HomepageDatePicker;