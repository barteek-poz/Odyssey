import airplaneIcon from "../assets/airplane.svg";
import { dateFormat } from "../helpers/dateFormat";
import ButtonRoundSmall from "./ButtonRoundSmall";
import { Link } from "react-router-dom";

const TravelBig = ({
  img,
  location,
  date,
  from,
  to,
  id,
  transport,
  accomodation,
}) => {
  const travelDate = dateFormat(date);
  return (
    <Link to={`/travels/${id}`} className="TRAVEL-BIG flex">
      <div className="TRAVEL-IMG-BIG sm:w-80 sm:h-44 rounded-lg overflow-hidden duration-300 hover:scale-105">
        <img src={img} alt="city-photo" className="w-full h-full" />
      </div>
      <div className="TRAVEL-INFO p-2 pl-6 flex flex-col gap-2">
        <h2 className="font-bold uppercase sm:text-lg">{location}</h2>
        <p>{travelDate}</p>
        <div className="TRANSPORT-INFO flex">
          Transport:
          <p className="px-1">{from}</p>
          <img src={airplaneIcon} alt="travel-icon" className="w-7 h-7 p-0.5" />
          {location} |<p className="px-1">{location}</p>
          <img src={airplaneIcon} alt="travel-icon" className="w-7 h-7 p-0.5" />
          {to}
        </div>
        <p>Accomodation: {accomodation}</p>
        <div className="flex group">
          <a href="home">
            <ButtonRoundSmall />
          </a>
          <p className="ml-4 h-6 duration-300 group-hover:border-b group-hover:border-b-black">
            More details...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TravelBig;
