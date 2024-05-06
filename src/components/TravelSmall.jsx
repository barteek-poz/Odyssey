const TravelSmall = ({ img, location, date }) => {
  return (
    <div className="TRAVEL-SMALL">
      <div className="TRAVEL-IMG-SMALL sm:w-44 sm:h-32">
        <img src={img} alt="city-photo" className="w-full h-full rounded-lg" />
      </div>
      <div className="TRAVEL-INFO-SMALL">
        <h3 className="text-lg">{location}</h3>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default TravelSmall;
