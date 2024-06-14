import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TravelBig from "../components/TravelBig";
import { useLoaderData } from "react-router-dom";
import sortTravels from "../helpers/sortTravels";
import MapButton from "../components/MapButton";
import useScreenWidth from "../hooks/useScreenWidth";
import { useState } from "react";

const Travels = () => {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const loaderTravels = useLoaderData();
  const sortedTravels = sortTravels(loaderTravels);
  const {screenWidth} = useScreenWidth()

  const mapHandler = () => {
    setIsMapOpen(prevState => !prevState)
  }
const mapContainerStyles = isMapOpen ? "MAP-CONTAINER w-full h-full" : "MAP-CONTAINER sm:w-full sm:h-96"
  return (
    <section className="TRAVELS relative w-full h-full mt-14 sm:mt-0">
      <Navigation />
      <div className={mapContainerStyles}>
        <Map allTravels={loaderTravels} />
      </div>
      {isMapOpen ? '' : <><h1 className="text-xl uppercase my-8 mx-8 sm:mx-16 text-center sm:text-start">
        Your travels
      </h1>
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
      </div></>}
      {screenWidth <= 640 && <MapButton onMapHandler={mapHandler} isMapOpen={isMapOpen}/>}
    </section>
  );
};

export default Travels;
