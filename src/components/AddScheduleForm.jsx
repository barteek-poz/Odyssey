import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
import ScheduleInput from "./ScheduleInput";

const AddScheduleForm = ({ scheduleFormHandler, addEventHandler, newEventValueHandler, setFormError}) => {
  return (
    <div className="SCHEDULE-INPUT group flex gap-2">
      <ScheduleInput type="text" placeholder="Enter your event" newEventValueHandler={newEventValueHandler} setFormError={setFormError}/>
      <CheckButton  onBtnClick={addEventHandler}/>
      <DeleteButton onBtnClick={scheduleFormHandler} />
    </div>
  );
};

export default AddScheduleForm;
