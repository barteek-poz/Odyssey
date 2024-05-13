import { useEffect, useState } from "react";
import ScheduleInput from "./ScheduleInput";

const Schedule = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      text: "Visit Operahouse",
    },
    { id: 2, text: "Eat brunost" },
  ]);
  const [isNewTask, setIsNewTask] = useState(false);
  const addTask = () => {
    setSchedule((prevState) => {
      return [...prevState, { id: Date.now(), text: "" }];
    });
    setIsNewTask(true);
  };

  const deleteTask = (id) => {
    const activeTasks = schedule.filter((task) => task.id !== id);
    setSchedule(activeTasks);
  };

  useEffect(() => {
    if (isNewTask) {
      const lastInput =
        document.querySelector(".SCHEDULE-LIST").lastChild.firstChild
          .firstChild;
      lastInput.focus();
      setIsNewTask(false);
    }
  }, [isNewTask]);

  const emptyTaskValidation = (id) => {
    const correctTasks = schedule.filter((task) => task.id !== id);
    setSchedule(correctTasks);
  };

  return (
    <div className="SCHEDULE flex flex-col gap-4 items-start">
      <div className="SCHEDULE-HEADER flex flex-col gap-4">
        <span className="uppercase underline">Schedule</span>
        <span>Here you can write your travel plans:</span>
      </div>
      <ul className="SCHEDULE-LIST flex flex-col gap-2">
        {schedule?.map((task, index) => {
          return (
            <li key={index} className="list-disc ml-5">
              <ScheduleInput
                id={task.id}
                task={task.text}
                deleteTask={deleteTask}
                emptyTaskValidation={emptyTaskValidation}
              />
            </li>
          );
        })}
      </ul>

      <button
        className="ADD-BUTTON transform py-0.5 duration-100 hover:border-b"
        onClick={addTask}>
        + Add event
      </button>
    </div>
  );
};

export default Schedule;
