import { Space, DatePicker } from "antd";
const { RangePicker } = DatePicker;

const HomepageDatePicker = ({setTravelDate}) => {
  const onCalendarChange = (dates, dateStrings) => {
    setTravelDate(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onCalendarChange={onCalendarChange} />
    </Space>
  );
};
export default HomepageDatePicker;
