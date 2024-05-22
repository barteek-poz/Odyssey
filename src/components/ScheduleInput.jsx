import checkIcon from "../assets/check.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";

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
    <div className="SCHEDULE-INPUT group flex gap-2 hover:bg-gray-200">
      <input
        className={ taskDone ? `line-through text-placeholderColor outline-outlineColor rounded-lg px-1 group-hover:bg-gray-200` : "outline-outlineColor rounded-lg px-1 group-hover:bg-gray-200"}
        type="text"
        value={scheduleTask}
        onChange={editTaskHandler}
        onBlur={() => {
          if (scheduleTask.length === 0) {
            emptyTaskValidation(id);
          }
        }}
      />
      <CheckButton onClick={doneTaskHandler} display="invisible" />
      <DeleteButton onClick={()=> {deleteTaskHandler(id)}} display="invisible" />
    </div>
  );
};

export default ScheduleInput;
