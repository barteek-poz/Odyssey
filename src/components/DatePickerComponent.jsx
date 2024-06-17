import { Space, DatePicker } from "antd";
import dayjs from "dayjs";
import { useLoaderData, useParams } from "react-router-dom";
const { RangePicker } = DatePicker;
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { useState } from "react";
import CHECK_ICON from "../assets/check.svg";

const DatePickerComponent = () => {
  const { date } = useLoaderData();
  const [dates, setDates] = useState({
    firstDate: date[0].slice(0, 10),
    secondDate: date[1].slice(0, 10),
  });
  const [showCheck, setShowCheck] = useState(false);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const onCalendarChange = async (dates, dateStrings) => {
    console.log("test");
    if (
      dateStrings[0].trim().length !== 0 &&
      dateStrings[1].trim().length !== 0
    ) {
      const newDates = [dateStrings[0], dateStrings[1]];
      await updateDoc(currentTravel, {
        date: newDates,
      });
      setDates({ firstDate: dateStrings[0], secondDate: dateStrings[1] });
    } else return;
  };

  const checkIconHandler = () => {
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 1000);
  };
  return (
    <div className="DATE-PICKER flex gap-2">
      <Space direction="vertical" size={12}>
        {date !== null && (
          <RangePicker
            onCalendarChange={onCalendarChange}
            defaultValue={[dayjs(dates.firstDate), dayjs(dates.secondDate)]}
            onBlur={checkIconHandler}
          />
        )}
      </Space>
     {showCheck&& <img src={CHECK_ICON} />}
    </div>
  );
};
export default DatePickerComponent;
