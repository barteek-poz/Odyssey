import { useContext, useEffect } from "react";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TravelBig from "../components/TravelBig";
import { useLoaderData } from "react-router-dom";
import { SearchLocationContext } from "../context/SearchLocationContext";

const Travels = () => {
  const loaderTravels = useLoaderData();
  const ctx = useContext(SearchLocationContext);
  
  console.log(ctx);
  return (
    <section className="TRAVELS w-full h-full">
      <Navigation />
      <div className="MAP-CONTAINER w-full h-96">
        <Map allTravels={loaderTravels} />
      </div>
      <h1 className="sm:text-xl uppercase p-8 ml-8">Your travels</h1>
      <div className="TRAVELS-LIST mx-16 flex flex-wrap justify-between gap-8 ">
        {loaderTravels?.map((travel) => {
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
