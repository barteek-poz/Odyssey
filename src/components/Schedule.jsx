import { useState } from "react";

const Schedule = () => {
  const [schedule, setSchedule] = useState(["Visit Operahouse", "Eat brunost"]);
  const addEvent = () => {
    setSchedule((prevState) => {
      return [...prevState, "test"];
    });
    console.log(schedule[-1]);
  };
  return (
    <div className="SCHEDULE flex flex-col gap-4 items-start">
      <div className="SCHEDULE-HEADER flex flex-col gap-4">
        <span className="uppercase underline">Schedule</span>
        <span>Here you can write your travel plans:</span>
      </div>
      {schedule?.map((event, index) => {
        return <input key={index} type="text" defaultValue={event} />;
      })}
      <button
        className="ADD-BUTTON transform py-0.5 duration-100 hover:border-b"
        onClick={addEvent}>
        + Add event
      </button>
    </div>
  );
};

export default Schedule;
