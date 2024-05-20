import { useLoaderData } from "react-router-dom";
import DetailsInput from "./DetailsInput";

const AccomodationDetails = () => {
  const loaderData = useLoaderData();
  return (
    <div className="ACCOMODATION FORM flex flex-col gap-4 ">
      <span className="uppercase underline">Accomodation</span>
      <DetailsInput
        label="Place"
        placeholder="Enter your accomodation place"
        initialValue={loaderData.accomodation?.place}
      />
      <DetailsInput
        label="Reservation number"
        placeholder="Enter your reservation number"
        initialValue={loaderData.accomodation?.reservationNumber}
      />
      <DetailsInput
        label="Room"
        placeholder="Enter your room type"
        initialValue={loaderData.accomodation?.room}
      />
      <DetailsInput
        label="Check-in"
        placeholder="Enter your check-in time"
        initialValue={loaderData.accomodation?.checkIn}
      />
      <DetailsInput
        label="Email"
        placeholder="Email adress to your accomodation"
        initialValue={loaderData.accomodation?.email}
      />
      <DetailsInput
        label="Phone"
        placeholder="Phone number to your accomodation"
        initialValue={loaderData.accomodation?.phone}
      />
    </div>
  );
};

export default AccomodationDetails;
