import DetailsInput from "./DetailsInput";

const AccomodationDetails = () => {
  return (
    <div className="ACCOMODATION FORM flex flex-col gap-4">
      <span className="uppercase underline">Accomodation</span>
      <DetailsInput label="Place" placeholder="Enter your accomodation place" />
      <DetailsInput label="Reservation number" placeholder="Enter your reservation number"/>
      <DetailsInput label="Room" placeholder="Enter your room type"/>
      <DetailsInput label="Check-in" placeholder="Enter your check-in time"/>
      <DetailsInput label="Email" placeholder="Email adress to your accomodation"/>
      <DetailsInput label="Phone" placeholder="Phone number to your accomodation"/>
    </div>
  );
};

export default AccomodationDetails;
