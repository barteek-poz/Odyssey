import AccomodationDetails from "../components/AccomodationDetails";
import DatePickerComponent from "../components/DatePicker";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import TransportDetails from "../components/TransportDetails";

const TravelDetails = () => {
  return (
    <section className="TRAVEL-DETAILS w-full h-full">
      <Navigation />
      <div className="MAP w-full h-72">
        <Map />
      </div>
      <div className="TRAVEL-DATA w-full h-full flex ">
        <div className="LEFT-COLUM w-1/2 border py-10 px-16 flex flex-col gap-8">
          <div className="flex items-center uppercase">
            <h1 className="underline uppercase">Location:</h1>
            <span className="pl-4">Oslo</span>
          </div>
          <div className="flex items-center gap-4 uppercase">
            <h2 className="underline uppercase">Date:</h2>

            <DatePickerComponent />
          </div>
          <AccomodationDetails />
        </div>
        <div className="RIGHT-COLUMN w-1/2 border py-10 px-16 flex flex-col gap-8">
          <TransportDetails />
        </div>
      </div>
    </section>
  );
};

export default TravelDetails;
