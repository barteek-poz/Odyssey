import { useEffect, useState } from "react";
import { dateFormat } from "../helpers/dateFormat";
import transportType from "../helpers/transportType";
import ButtonRound from "./ButtonRound";
import { Link } from "react-router-dom";
import useScreenWidth from "../hooks/useScreenWidth";

const TravelBig = ({
  img,
  location,
  date,
  from,
  to,
  id,
  transportTo,
  transportFrom,
  accomodation,
}) => {
  const travelDate = dateFormat(date);
  const transportToImg = transportType(transportTo);
  const transportFromImg = transportType(transportFrom);
  const {screenWidth} = useScreenWidth();
  return (
    <div className="TRAVEL-BIG flex flex-col sm:flex-row items-center text-center sm:text-start ">
      <Link
        to={`/travels/${id}`}
        className="TRAVEL-IMG-BIG min-w-64 sm:min-w-72 h-44  overflow-hidden duration-300 hover:scale-105">
        <img src={img} alt="city-photo" className="sm:w-full w-72 h-full rounded-lg" />
      </Link>
      <div className="TRAVEL-INFO py-2 sm:py-0 sm:p-2 sm:pl-6 flex flex-col gap-2 text-sm justify-center">
        <h2 className="font-bold uppercase text-lg">{location}</h2>
        <p>{travelDate}</p>
        {screenWidth >= 1024 && (
          <>
            <div className="TRANSPORT-INFO flex items-center ">
              Transport:
              <p className="px-1">{from}</p>
              <img
                src={transportToImg}
                alt="travel-icon"
                className="w-7 h-7 p-0.5"
              />
              <p>{location} |</p>
              <p className="px-1">{location}</p>
              <img
                src={transportFromImg}
                alt="travel-icon"
                className="w-7 h-7 p-0.5"
              />
              <p className="px-1">{to}</p>
            </div>
            <p>Accomodation: {accomodation}</p>
          </>
        )}
        <Link to={`/travels/${id}`} className="flex group items-center ">
          <div className="">
            <ButtonRound size="small" />
          </div>
          <p className="ml-4 h-6 duration-300 group-hover:border-b group-hover:border-b-black">
            More details...
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TravelBig;
