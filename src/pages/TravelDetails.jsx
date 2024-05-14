import { useLoaderData } from "react-router-dom";
import AccomodationDetails from "../components/AccomodationDetails";
import DatePickerComponent from "../components/DatePicker";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Schedule from "../components/Schedule";
import TransportDetails from "../components/TransportDetails";

const TravelDetails = () => {
  const loaderData = useLoaderData()
  console.log(loaderData);
  return (
    <section className="TRAVEL-DETAILS w-full h-full">
      <Navigation />
      <div className="MAP w-full h-72">
        <Map singleTravelLocation={loaderData.geolocation} />
      </div>
      <div className="TRAVEL-DATA w-full h-full flex ">
        <div className="LEFT-COLUM w-1/2 border py-10 px-16 flex flex-col gap-8">
          <div className="flex items-center uppercase">
            <h1 className="underline uppercase">Location:</h1>
            <span className="pl-4">{loaderData.location}</span>
          </div>
          <div className="flex items-center gap-4 uppercase">
            <h2 className="underline uppercase">Date:</h2>
            <DatePickerComponent date={loaderData.date} />
          </div>
          <AccomodationDetails />
          <Schedule />
        </div>
        <div className="RIGHT-COLUMN w-1/2 border py-10 px-16 flex flex-col gap-8">
          <TransportDetails />
        </div>
      </div>
    </section>
  );
};

export default TravelDetails;
