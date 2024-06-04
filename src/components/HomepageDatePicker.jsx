import { Space, DatePicker } from "antd";
const { RangePicker } = DatePicker;

const HomepageDatePicker = ({setTravelDate, setFormError}) => {
  const onCalendarChange = (dates, dateStrings) => {
    setTravelDate(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onCalendarChange={onCalendarChange} onFocus={()=>{setFormError(false)}}/>
    </Space>
  );
};
export default HomepageDatePicker;
