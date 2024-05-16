import Button from "./Button";
import DatePickerComponent from "./DatePickerComponent";
import SearchInput from "./SearchInput";

const HomepageForm = () => {
  return (
    <form action="POST" className="ADD-FORM flex flex-col gap-4 mt-16">
      <h1 className="xl:text-xl uppercase">Plan your next adventure</h1>
      <SearchInput label="Destination" placeholder="Type your destination" />
      <div className="INPUT-BOX flex flex-col mb-3">
        <label htmlFor="date-input" className="text-sm px-1">
          Date
        </label>
        <DatePickerComponent />
      </div>
      <Button text="Create" />
    </form>
  );
};

export default HomepageForm;
