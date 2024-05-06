import airplaneIcon from "../assets/airplane.svg";
import ButtonRound from "../components/ButtonRound";
const TravelBig = ({
  img,
  location,
  date,
  from,
  to,
  transport,
  accomodation,
}) => {
  return (
    <div className="TRAVEL-BIG flex">
      <div className="TRAVEL-IMG-BIG sm:w-80 sm:h-44 rounded-lg overflow-hidden">
        <img src={img} alt="city-photo" className="w-full h-full" />
      </div>
      <div className="TRAVEL-INFO p-2 pl-4 flex flex-col gap-2">
        <h2 className="font-bold uppercase sm:text-lg">{location}</h2>
        <p>{date}</p>
        <div className="TRANSPORT-INFO flex">
          Transport:
          <p className="px-1">{from}</p>
          <img src={airplaneIcon} alt="travel-icon" className="w-7 h-7 p-0.5" />
          {location} |<p className="px-1">{location}</p>
          <img src={airplaneIcon} alt="travel-icon" className="w-7 h-7 p-0.5" />
          {to}
        </div>
        <p>Accomodation: {accomodation}</p>
        <div className="flex">
          <a href="home">
            <ButtonRound size={6} />
          </a>
          <span className="ml-4">More details...</span>
        </div>
      </div>
    </div>
  );
};

export default TravelBig;
