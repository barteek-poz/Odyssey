import { useRef } from "react";

const ScheduleInput = ({ placeholder, newEventValueHandler }) => {
  const inputRef = useRef();
  const inputHandler = () => {
    newEventValueHandler(inputRef.current.value);
  };
  return (
    <div className="SCHEDULE-INPUT">
      <input
        onChange={inputHandler}
        ref={inputRef}
        type="text"
        className={
          "SEARCH-INPUT text-start border border-black rounded-lg w-64 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor"
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default ScheduleInput;
