import { useLoaderData } from "react-router-dom";
import AccomodationDetails from "../components/AccomodationDetails";
import DatePickerComponent from "../components/DatePickerComponent";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Schedule from "../components/Schedule";
import TransportDetails from "../components/TransportDetails";
import CenterComponent from "../components/CenterComponent";
import PieChartForm from "../components/PieChartForm";
import ModalComponent from "../components/ModalComponent";

const TravelDetails = () => {
  const loaderData = useLoaderData();
  return (
    <section className="TRAVEL-DETAILS w-full h-full">
      <Navigation />
      <div className="MAP w-full h-72 2xl:h-96">
        <Map singleTravelLocation={loaderData.geolocation} scrollZoom={false} />
      </div>
      <CenterComponent>
        <div className="TRAVEL-DATA flex flex-col justify-center gap-10 ">
          <div className="flex justify-center">
            <div className="LEFT-COLUM w-1/2 py-10 px-10 flex flex-col gap-8">
              <div className="flex uppercase">
                <h1 className="underline uppercase">Location:</h1>
                <span className="pl-4">{loaderData.location}</span>
              </div>
              <div className="flex items-center gap-4 uppercase">
                <span className="underline uppercase">Date:</span>
                <DatePickerComponent />
              </div>
              <AccomodationDetails />
              <Schedule />
            </div>
            <div className="RIGHT-COLUMN w-1/2 py-10 px-10 flex flex-col items-end gap-8">
              <TransportDetails />
            </div>
          </div>
          <PieChartForm />
        <ModalComponent />
        </div>
      </CenterComponent>
    </section>
  );
};

export default TravelDetails;
