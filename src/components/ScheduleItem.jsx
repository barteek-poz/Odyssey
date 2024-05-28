import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";

const ScheduleItem = ({
  id,
  task,
  done,
  deleteEventHandler,
  eventStatusHandler,
}) => {
  const isDone = {
    true: 'line-through text-placeholderColor', 
    false: ''
  }
  return (
    <div className="SCHEDULE-ITEM group flex items-center justify-between w-64 px-1 hover:bg-gray-200">
      <p className={`${isDone[done]}`}>{task}</p>
      <div className="flex gap-1">
        <CheckButton
          display="invisible"
          onBtnClick={() => eventStatusHandler(id)}
        />
        <DeleteButton
          display="invisible"
          onBtnClick={() => {
            deleteEventHandler(id);
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleItem;
