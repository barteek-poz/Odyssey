import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddButton from "./AddButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import AddScheduleForm from "./AddScheduleForm";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  const { schedule } = useLoaderData();
  const [scheduleList, setScheduleList] = useState(schedule);
  const [newEventValue, setNewEventValue] = useState("");
  const [formIsOpen, setFormIsOpen] = useState(false);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const scheduleFormHandler = () => {
    setFormIsOpen((prevState) => !prevState);
  };

  const newEventValueHandler = (eventValue) => {
    setNewEventValue(eventValue);
  };

  const addEventHandler = async () => {
    const newScheduleList = [
      ...scheduleList,
      {
        id: Date.now(),
        text: newEventValue,
        done: false,
      },
    ];
    await updateDoc(currentTravel, {
      schedule: newScheduleList,
    });
    setScheduleList(newScheduleList);
    setFormIsOpen(false);
  };

  const eventStatusHandler = async (eventId) => {
    const updatedScheduleList = scheduleList.map((scheduleEvent) => {
      if (scheduleEvent.id === eventId) {
        return { ...scheduleEvent, done: !scheduleEvent.done };
      } else {
        return scheduleEvent;
      }
    });
    console.log(updatedScheduleList);
    await updateDoc(currentTravel, {
      schedule: updatedScheduleList,
    });
    setScheduleList(updatedScheduleList);
  };

  const deleteEventHandler = async (eventId) => {
    const updatedScheduleList = scheduleList?.filter(
      (scheduleEvent) => scheduleEvent.id !== eventId
    );
    await updateDoc(currentTravel, {
      schedule: updatedScheduleList,
    });
    setScheduleList(updatedScheduleList);
  };

  return (
    <div className="SCHEDULE flex flex-col gap-4 items-start">
      <div className="SCHEDULE-HEADER flex flex-col gap-4">
        <span className="uppercase underline">Schedule</span>
        <span>Here you can write your travel plans:</span>
      </div>
      <ul className="SCHEDULE-LIST flex flex-col gap-2">
        {scheduleList?.map((task, index) => {
          return (
            <li key={index} className="list-disc ml-5 ">
              <ScheduleItem
                id={task.id}
                task={task.text}
                done={task.done}
                deleteEventHandler={deleteEventHandler}
                eventStatusHandler={eventStatusHandler}
              />
            </li>
          );
        })}
      </ul>
      {formIsOpen ? (
        <AddScheduleForm
          newEventValueHandler={newEventValueHandler}
          scheduleFormHandler={scheduleFormHandler}
          addEventHandler={addEventHandler}
        />
      ) : (
        <AddButton text="Add travel event" onBtnClick={scheduleFormHandler} />
      )}
    </div>
  );
};

export default Schedule;
