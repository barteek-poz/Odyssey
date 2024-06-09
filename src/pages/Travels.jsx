import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TravelBig from "../components/TravelBig";
import { useLoaderData } from "react-router-dom";
import sortTravels from "../helpers/sortTravels";

const Travels = () => {
  const loaderTravels = useLoaderData();
  const sortedTravels = sortTravels(loaderTravels)
  return (
    <section className="TRAVELS w-full h-full">
      <Navigation />
      <div className="MAP-CONTAINER w-full h-96">
        <Map allTravels={loaderTravels} />
      </div>
      <h1 className="text-xl uppercase my-8 mx-8 sm:mx-16 text-center sm:text-start">Your travels</h1>
      <div className="TRAVELS-LIST mx-8 sm:mx-16 grid grid-cols-1 2xl:grid-cols-2 gap-4 ">
        {sortedTravels?.map((travel) => {
          return (
            <TravelBig
              key={travel.id}
              id={travel.id}
              img={travel.img}
              location={travel.location}
              date={travel.date}
              from={travel.transport?.to.cityDeparture}
              to={travel.transport?.from.cityArrival}
              transportTo={travel.transport?.to.type}
              transportFrom={travel.transport?.from.type}
              accomodation={travel.accomodation?.place}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Travels;
