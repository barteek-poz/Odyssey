import { Space, DatePicker } from "antd";
import dayjs from "dayjs";
import { useLoaderData } from "react-router-dom";
const { RangePicker } = DatePicker;

const DatePickerComponent = () => {
  const loaderData = useLoaderData()
  const firstDate = loaderData?.date[0].slice(0, 10);
  const secondDate = loaderData?.date[1].slice(0,10);
  const onCalendarChange = (dates, dateStrings) => {
    console.log(dates);
    console.log(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      {loaderData !== null && (
        <RangePicker
          onCalendarChange={onCalendarChange}
          defaultValue={[dayjs(firstDate), dayjs(secondDate)]}
        />
      )}
    </Space>
  );
};
export default DatePickerComponent;
