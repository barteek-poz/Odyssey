import MAP_ICON from "../assets/map.svg";
import LIST_ICON from "../assets/list.svg";
const MapButton = ({ onMapHandler, isMapOpen }) => {
  return (
    <button
      onClick={onMapHandler}
      className="MAP-BTN fixed bottom-10 left-1/2 -translate-x-1/2 z-50 max-w-28 bg-black text-white text-lg flex items-center justify-center gap-2 px-8 py-4 rounded-lg hover:bg-gray-800">
      {isMapOpen ? (
        <>
        List <img src={LIST_ICON} alt="list-icon" />
      </>
      ) : (
        <>
          Map <img src={MAP_ICON} alt="map-icon" />
        </>
      )}
    </button>
  );
};

export default MapButton;
