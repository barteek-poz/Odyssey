import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { SearchLocationContext } from "../context/SearchLocationContext";
import CenterMap from "./CenterMap";
import pinIconSvg from "../assets/pin.svg";
import { Icon } from "leaflet";
const Map = () => {
  const ctx = useContext(SearchLocationContext);
  const pinIcon = new Icon({
    iconUrl: pinIconSvg,
    iconSize: [75, 75],
    iconAnchor: [50,75]
  });
  return (
    <div className="MAP-CONTAINER w-full h-full">
      <MapContainer center={[52.406376, 16.925167]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
      <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>
     
      '
          url={`https://api.mapbox.com/styles/v1/barteek-poz/clvj9tqgs01a101phdesc1yek/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
        {ctx.location && <Marker
          key={ctx.location.id}
          position={[ctx.location.lat, ctx.location.lon]}
          icon={pinIcon}></Marker>}
        <CenterMap locationPosition={ctx.location} />
      </MapContainer>
    </div>
  );
};

export default Map;
