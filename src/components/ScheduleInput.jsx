import checkIcon from "../assets/check.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

const ScheduleInput = ({ task, id, done, deleteTaskHandler, emptyTaskValidation }) => {
  const [scheduleTask, setScheduleTask] = useState(task);
  const [taskDone, setTaskDone] = useState(done);
  const editTaskHandler = (e) => {
    setScheduleTask(e.target.value);
  };
  const doneTaskHandler = () => {
    setTaskDone((prevState) => !prevState);
  };
  return (
    <div className="SCHEDULE-INPUT flex gap-2 group">
      <input
        className={taskDone ? `line-through text-placeholderColor` : ""}
        type="text"
        value={scheduleTask}
        onChange={editTaskHandler}
        onBlur={() => {
          if (scheduleTask.length === 0) {
            emptyTaskValidation(id);
          }
        }}
      />
      <img
        onClick={doneTaskHandler}
        src={checkIcon}
        alt="check-icon"
        className="hidden cursor-pointer duration-300 hover:scale-110 group-hover:block"
      />
      <img
        onClick={() => {
          deleteTaskHandler(id);
        }}
        src={deleteIcon}
        alt="delete-icon"
        className="hidden cursor-pointer duration-300 hover:scale-110 group-hover:block"
      />
    </div>
  );
};

export default ScheduleInput;
