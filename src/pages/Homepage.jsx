import LOGO from "../assets/logo.svg";
import Button from "../components/Button";
import DatePickerComponent from "../components/DatePicker";
import Input from "../components/Input";
import TravelSmall from "../components/TravelSmall";
import paris from "../assets/paris.jpg";
import rome from "../assets/rome.jpg";
import ButtonRound from "../components/ButtonRound";
import Map from "../components/Map";
const Homepage = () => {
  return (
    <section className="HOMEPAGE w-full h-full flex">
      <div className="SEARCH-CONTAINER xl:w-1/2 px-10 py-5">
        <header className="HEADER">
          <img className="xl:w-32" src={LOGO} alt="odyssey-logo" />
        </header>
        <form action="POST" className="ADD-FORM flex flex-col gap-4 mt-16">
          <h1 className="xl:text-xl uppercase">Plan your next adventure</h1>
          <Input label="Destination" placeholder="Type your destination" />
          <div className="INPUT-BOX flex flex-col mb-3">
            <label htmlFor="date-input" className="text-sm px-1">
              Date
            </label>
            <DatePickerComponent />
          </div>
          <Button text="Create" />
        </form>
        <section className="TRAVELS-SECTION mt-16">
          <h2 className="xl:text-lg uppercase mt-10 mb-5">
            Your recent travels
          </h2>
          <div className="flex items-center">
            <div className="TRAVELS-BOX flex items-center gap-14">
              <TravelSmall
                img={paris}
                location="Paris"
                date="01/05/24 - 04/05/24"
              />
              <TravelSmall
                img={rome}
                location="Rome"
                date="23/07/24 - 02/08/24"
              />
              <TravelSmall
                img={rome}
                location="Rome"
                date="23/07/24 - 02/08/24"
              />
            </div>
            <ButtonRound />
          </div>
        </section>
      </div>
      <div className="MAP-CONTAINER xl:w-1/2">
        <Map />
      </div>
    </section>
  );
};

export default Homepage;
