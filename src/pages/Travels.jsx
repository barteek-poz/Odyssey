import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TravelBig from "../components/TravelBig";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

const Travels = () => {
  const loaderTravels = useLoaderData()
  
  return (
    <section className="TRAVELS w-full h-full">
      <Navigation />
      <div className="MAP-CONTAINER w-full h-96">
        <Map />
      </div>
      <h1 className="sm:text-xl uppercase p-8 ml-8">Your travels</h1>
      <div className="TRAVELS-LIST mx-16 flex flex-wrap justify-between gap-8 ">
        {loaderTravels?.map(travel => {
          return  <TravelBig
          key={travel.id}
          img={travel.img}
          location={travel.location}
          date={travel.date}
          from={travel.transport.to.cityDeparture}
          to={travel.transport.from.cityArrival}
          accomodation={travel.accomodation.place}
        />
        })}
        
      </div>
    </section>
  );
};

export default Travels;
