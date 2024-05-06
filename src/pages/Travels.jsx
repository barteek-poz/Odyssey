import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TravelBig from "../components/TravelBig";
import paris from "../assets/paris.jpg";
import rome from "../assets/rome.jpg";

const Travels = () => {
  return (
    <section className="TRAVELS w-full h-full">
      <Navigation />
      <div className="MAP-CONTAINER w-full h-96">
        <Map />
      </div>
      <h1 className="sm:text-xl uppercase p-8 ml-8">Your travels</h1>
      <div className="TRAVELS-LIST mx-16 flex flex-wrap justify-between gap-8 ">
        <TravelBig
          img={paris}
          location="Paris"
          date="01/05/24 - 04/05/24"
          from="Warsaw"
          to="Warsaw"
          accomodation="Paris Hotel"
        />
        <TravelBig
          img={rome}
          location="Rome"
          date="01/05/24 - 04/05/24"
          from="Cracow"
          to="Cracow"
          accomodation="Rome Hotel"
        />
        <TravelBig
          img={paris}
          location="Paris"
          date="01/05/24 - 04/05/24"
          from="Warsaw"
          to="Warsaw"
          accomodation="Paris Hotel"
        />
      </div>
    </section>
  );
};

export default Travels;
