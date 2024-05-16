import { Space, DatePicker } from "antd";
import dayjs from "dayjs";
import { useLoaderData } from "react-router-dom";
const { RangePicker } = DatePicker;
const DatePickerComponent = () => {
  const loaderData = useLoaderData();
  const firstDate = loaderData.date.slice(0, 10);
  const secondDate = loaderData.date.slice(12).trim();
  const onCalendarChange = (dates, dateStrings) => {
    console.log(dates);
    console.log(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      {loaderData && (
        <RangePicker
          onCalendarChange={onCalendarChange}
          defaultValue={[dayjs(firstDate), dayjs(secondDate)]}
        />
      )}
    </Space>
  );
};
export default DatePickerComponent;
