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
    <div className="SCHEDULE-INPUT flex gap-2 group">
      <input
        className={ taskDone ? `line-through text-placeholderColor outline-outlineColor rounded-lg px-1` : "outline-outlineColor rounded-lg px-1"}
        type="text"
        value={scheduleTask}
        onChange={editTaskHandler}
        onBlur={() => {
          if (scheduleTask.length === 0) {
            emptyTaskValidation(id);
          }
        }}
      />
      <CheckButton onClick={doneTaskHandler} display="hidden"/>
      <DeleteButton onClick={()=> {deleteTaskHandler(id)}} display="hidden"/>
    </div>
  );
};

export default ScheduleInput;
