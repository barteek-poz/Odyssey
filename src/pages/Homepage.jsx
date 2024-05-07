import LOGO from "../assets/logo.svg";
import TravelSmall from "../components/TravelSmall";
import paris from "../assets/paris.jpg";
import rome from "../assets/rome.jpg";
import ButtonRound from "../components/ButtonRound";
import Map from "../components/Map";
import HomepageForm from "../components/HomepageForm";
const Homepage = () => {
  return (
    <section className="HOMEPAGE w-full h-full flex">
      <div className="SEARCH-CONTAINER xl:w-1/2 px-10 py-5">
        <header className="HEADER">
          <img className="xl:w-32" src={LOGO} alt="odyssey-logo" />
        </header>
        <HomepageForm />
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
            <div className="flex flex-col items-center gap-1 ml-4">
              <ButtonRound /> <span>View all your travels</span>
            </div>
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
