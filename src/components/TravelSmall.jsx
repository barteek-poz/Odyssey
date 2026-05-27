import { useContext } from "react";
import { dateFormat } from "../helpers/dateFormat";
import {Link} from 'react-router-dom'
import { SearchLocationContext } from "../context/SearchLocationContext";
const TravelSmall = ({ img, location, startDate, endDate, id }) => {
  const ctx = useContext(SearchLocationContext)
  return (
    <Link to={`/travels/${id}`} className="TRAVEL-SMALL duration-300 hover:scale-105" onClick={ctx.clearContext}>
      <div className="TRAVEL-IMG-SMALL w-72 h-52 lg:w-44 lg:h-32">
        <img src={img} alt="city-photo" className="w-full h-full rounded-lg" />
      </div>
      <div className="TRAVEL-INFO-SMALL px-1">
        <h3 className="text-xl lg:text-base 2xl:text-xl">{location}</h3>
        <span className="text-sm ">{startDate} - {endDate}</span>
      </div>
    </Link>
  );
};

export default TravelSmall;
