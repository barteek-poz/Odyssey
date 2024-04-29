import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
const Map = () => {
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
      </MapContainer>
    </div>
  );
};

export default Map;
