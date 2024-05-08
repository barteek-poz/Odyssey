import { dateFormat } from "../helpers/dateFormat";
const TravelSmall = ({ img, location, date }) => {
  const travelDate = dateFormat(date);

  return (
    <div className="TRAVEL-SMALL duration-300 hover:scale-105">
      <div className="TRAVEL-IMG-SMALL sm:w-44 sm:h-32">
        <img src={img} alt="city-photo" className="w-full h-full rounded-lg" />
      </div>
      <div className="TRAVEL-INFO-SMALL px-1">
        <h3 className="sm:text-base 2xl:text-xl">{location}</h3>
        <span className="sm:text-sm 2xl:text-base">{travelDate}</span>
      </div>
    </div>
  );
};

export default TravelSmall;
