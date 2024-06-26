import "leaflet/dist/leaflet.css";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SearchLocationContext } from "../context/SearchLocationContext";
import CenterMap from "./CenterMap";
import pinIconSvg from "../assets/pin.svg";
import { Icon } from "leaflet";
import { dateFormat } from "../helpers/dateFormat";

const Map = ({ allTravels, singleTravelLocation, scrollZoom }) => {
  const ctx = useContext(SearchLocationContext);
  const pinIcon = new Icon({
    iconUrl: pinIconSvg,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
 
  return (
    <div className="MAP-CONTAINER w-full h-full">
      <MapContainer
        scrollWheelZoom={scrollZoom}
        center={
          singleTravelLocation
            ? [singleTravelLocation._lat, singleTravelLocation._long]
            : [52.406376, 16.925167]
        }
        zoom={singleTravelLocation ? 10 : 5}>
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
      <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={`https://api.mapbox.com/styles/v1/barteek-poz/clvj9tqgs01a101phdesc1yek/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
        {ctx.location && (
          <Marker
            key={ctx.location.id}
            position={[ctx.location.lat, ctx.location.lon]}
            icon={pinIcon}></Marker>
        )}
        {allTravels &&
          allTravels.map((travel) => {
            return (
              <Marker
                key={travel.id}
                position={[travel.geolocation._lat, travel.geolocation._long]}
                icon={pinIcon}>
                <Popup>
                  <div className="flex flex-col gap-0.5 p-0">
                    <span className="uppercase font-bold">
                      {travel.location}
                    </span>
                    <span className="text-xs my-0">
                      {dateFormat(travel.date)}
                    </span>
                    <Link to={`/travels/${travel.id}`} onClick={ctx.clearContext}>See details...</Link>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        <CenterMap locationPosition={ctx.location} />
      </MapContainer>
    </div>
  );
};

export default Map;
