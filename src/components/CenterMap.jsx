import { useEffect } from "react";
import { useMap } from "react-leaflet";
const CenterMap = (props) => {
  const { locationPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (locationPosition) {
      map.setView(L.latLng(locationPosition?.lat, locationPosition?.lon), 10, {
        animate: true,
      });
    }
  }, [locationPosition]);
};

export default CenterMap;
