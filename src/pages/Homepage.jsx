import LOGO from "../assets/logo.svg";
import Button from "../components/Button";
import DatePickerComponent from "../components/DatePicker";
import Input from "../components/Input";
const Homepage = () => {
  return (
    <section className="HOMEPAGE w-full h-full flex">
      <div className="SEARCH-CONTAINER xl:w-1/2 border px-10 py-5">
        <header className="HEADER">
          <img className="xl:w-32" src={LOGO} alt="odyssey-logo" />
        </header>
        <form action="POST">
          <h1 className="xl:text-xl mt-16 mb-5 uppercase">Plan your next adventure</h1>
          <Input label="Destination" placeholder="Type your destination" />
          <div className="INPUT-BOX flex flex-col pb-5">
            <label htmlFor="date-input" className="text-sm px-1">
              Date
            </label>
            <DatePickerComponent />
          </div>
          <Button text="Create"/>
        </form>
      </div>
      <div className="MAP-CONTAINER xl:w-1/2"></div>
    </section>
  );
};

export default Homepage;
