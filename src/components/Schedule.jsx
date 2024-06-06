import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddButton from "./AddButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import AddScheduleForm from "./AddScheduleForm";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  const { schedule } = useLoaderData();
  const [scheduleList, setScheduleList] = useState(() => {
    if (schedule) {
      return schedule;
    } else return [];
  });
  const [newEventValue, setNewEventValue] = useState("");
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [formError, setFormError] = useState(false);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const scheduleFormHandler = () => {
    setFormIsOpen((prevState) => !prevState);
    setFormError(false);
  };

  const newEventValueHandler = (eventValue) => {
    setNewEventValue(eventValue);
  };

  const addEventHandler = async () => {
    try {
      if (newEventValue.length === 0) {
        setFormError(true);
      } else {
        setFormError(false);
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
      }
    } catch (err) {
      alert(err);
    }
  };
  
  const eventStatusHandler = async (eventId) => {
    const updatedScheduleList = scheduleList.map((scheduleEvent) => {
      if (scheduleEvent.id === eventId) {
        return { ...scheduleEvent, done: !scheduleEvent.done };
      } else {
        return scheduleEvent;
      }
    });
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
    <div className="SCHEDULE flex flex-col items-start">
      <div className="SCHEDULE-HEADER flex flex-col gap-4">
        <span className="uppercase underline">Schedule</span>
        <span className="mb-4">Here you can write your travel plans:</span>
      </div>
      <ul className="SCHEDULE-LIST flex flex-col gap-2 mb-4">
        {scheduleList
          ? scheduleList.map((task, index) => {
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
            })
          : ""}
      </ul>
      {formIsOpen ? (
        <>
          <AddScheduleForm
            newEventValueHandler={newEventValueHandler}
            scheduleFormHandler={scheduleFormHandler}
            addEventHandler={addEventHandler}
            setFormError={setFormError}
          />
          {
            <p className={formError ? `text-red-500` : `invisible`}>
              Schedule event cannot be empty
            </p>
          }
        </>
      ) : (
        <AddButton text="Add travel event" onBtnClick={scheduleFormHandler} />
      )}
    </div>
  );
};

export default Schedule;
