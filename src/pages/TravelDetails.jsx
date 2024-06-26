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
import PDFButton from "../components/PDFButton";


const TravelDetails = () => {
  const loaderData = useLoaderData();
  return (
    <section className="TRAVEL-DETAILS w-full h-full mt-14 sm:mt-0">
      <Navigation />
      <div className="MAP w-full h-72 2xl:h-96">
        <Map singleTravelLocation={loaderData.geolocation} scrollZoom={false} />
      </div>
      <CenterComponent>
        <div className="TRAVEL-DATA flex flex-col lg:flex-row justify-center">
          <div className="LEFT-COLUM w-full lg:w-1/2 lg:py-10 pt-10 lg:px-10  flex flex-col items-center lg:items-start gap-8">
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
          <div className="RIGHT-COLUMN lg:w-1/2 py-10 lg:px-10 lg:ml-0 mb-8 lg:mb-0 flex flex-col items-center lg:items-end gap-8">
            <TransportDetails />
          </div>
        </div>
        <PieChartForm />
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:mt-10 pb-8">
          <PDFButton travelData={loaderData} />
          <ModalComponent />
        </div>
      </CenterComponent>
    </section>
  );
};

export default TravelDetails;
