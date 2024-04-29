const TravelSmall = ({ img, location, date }) => {
  return (
    <div className="TRAVEL-AVATAR-SMALL">
      <div className="sm:w-44 sm:h-32">
        <img src={img} alt="city-photo" className="w-full h-full rounded-lg" />
      </div>
      <div>
        <h3 className="text-lg">{location}</h3>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default TravelSmall;
