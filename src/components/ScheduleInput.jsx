import checkIcon from "../assets/check.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

const ScheduleInput = ({ task, id, deleteTask, emptyTaskValidation }) => {
  const [scheduleTask, setScheduleTask] = useState(task);
  const editTask = (e) => {
    setScheduleTask(e.target.value);
  };

  return (
    <div className="SCHEDULE-INPUT flex gap-2 group">
      <input
        type="text"
        value={scheduleTask}
        onChange={editTask}
        onBlur={() => {
          if (scheduleTask.length === 0) {
            emptyTaskValidation(id);
          }
        }}
      />
      <img
        src={checkIcon}
        alt="check-icon"
        className="hidden cursor-pointer duration-300 hover:scale-110 group-hover:block"
      />
      {/* <img
        src={editIcon}
        alt="edit-icon"
        className="hidden cursor-pointer duration-300 hover:scale-110 group-hover:block"
      /> */}
      <img
        onClick={() => {
          deleteTask(id);
        }}
        src={deleteIcon}
        alt="delete-icon"
        className="hidden cursor-pointer duration-300 hover:scale-110 group-hover:block"
      />
    </div>
  );
};

export default ScheduleInput;
