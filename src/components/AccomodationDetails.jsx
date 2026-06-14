import { useLoaderData, useParams } from "react-router-dom";
import DetailsInput from "./DetailsInput";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const accommodationDetails = () => {
  const { accommodationList } = useLoaderData();
  const [accommodationData, setaccommodationData] = useState(accommodationList[0]);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const updateaccommodationDataHandler = async (category, inputValue) => {
    await updateDoc(currentTravel, {
      accommodation: { ...accommodationData, [category]: inputValue },
    });
    setaccommodationData({ ...accommodationData, [category]: inputValue });
  };

  return (
    <div className="accommodation FORM flex flex-col gap-4 pr-6 md:pr-0 md:pl-7  lg:pl-0">
      <span className="uppercase underline">accommodation</span>
      <DetailsInput
        label="Place"
        placeholder="Enter your accommodation place"
        initialValue={accommodationData?.place}
        category="place"
        updateDataHandler={updateaccommodationDataHandler}
      />
      <DetailsInput
        label="Reservation number"
        placeholder="Enter your reservation number"
        initialValue={accommodationData?.reservationNumber}
        category="reservationNumber"
        updateDataHandler={updateaccommodationDataHandler}
      />
      <DetailsInput
        label="Room"
        placeholder="Enter your room type"
        initialValue={accommodationData?.roomType}
        category="room"
        updateDataHandler={updateaccommodationDataHandler}
      />
      <DetailsInput
        label="Check-in"
        placeholder="Enter your check-in time"
        initialValue={accommodationData?.accStart}
        category="checkIn"
        updateDataHandler={updateaccommodationDataHandler}
      />
      <DetailsInput
        label="Email"
        placeholder="Enter email adress"
        initialValue={accommodationData?.email}
        category="email"
        updateDataHandler={updateaccommodationDataHandler}
      />
      <DetailsInput
        label="Phone"
        placeholder="Enter contact number"
        initialValue={accommodationData?.phone}
        category="phone"
        updateDataHandler={updateaccommodationDataHandler}
      />
    </div>
  );
};

export default accommodationDetails;
