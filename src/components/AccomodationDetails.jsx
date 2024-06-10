import { useLoaderData, useParams } from "react-router-dom";
import DetailsInput from "./DetailsInput";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const AccomodationDetails = () => {
  const { accomodation } = useLoaderData();
  const [accomodationData, setAccomodationData] = useState(accomodation);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const updateAccomodationDataHandler = async (category, inputValue) => {
    await updateDoc(currentTravel, {
      accomodation: { ...accomodationData, [category]: inputValue },
    });
    setAccomodationData({ ...accomodationData, [category]: inputValue });
  };
  
  return (
    <div className="ACCOMODATION FORM flex flex-col gap-4 pr-6 md:pr-0 md:pl-7  lg:pl-0">
      <span className="uppercase underline">Accomodation</span>
      <DetailsInput
        label="Place"
        placeholder="Enter your accomodation place"
        initialValue={accomodation?.place}
        category="place"
        updateDataHandler={updateAccomodationDataHandler}
      />
      <DetailsInput
        label="Reservation number"
        placeholder="Enter your reservation number"
        initialValue={accomodation?.reservationNumber}
        category="reservationNumber"
        updateDataHandler={updateAccomodationDataHandler}
      />
      <DetailsInput
        label="Room"
        placeholder="Enter your room type"
        initialValue={accomodation?.room}
        category="room"
        updateDataHandler={updateAccomodationDataHandler}
      />
      <DetailsInput
        label="Check-in"
        placeholder="Enter your check-in time"
        initialValue={accomodation?.checkIn}
        category="checkIn"
        type="time"
        updateDataHandler={updateAccomodationDataHandler}
      />
      <DetailsInput
        label="Email"
        placeholder="Enter email adress"
        initialValue={accomodation?.email}
        category="email"
        updateDataHandler={updateAccomodationDataHandler}
      />
      <DetailsInput
        label="Phone"
        placeholder="Enter contact number"
        initialValue={accomodation?.phone}
        category="phone"
        updateDataHandler={updateAccomodationDataHandler}
      />
    </div>
  );
};

export default AccomodationDetails;
