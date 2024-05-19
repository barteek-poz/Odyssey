import { useContext, useState } from "react";
import Button from "./Button";
import HomepageDatePicker from "./HomepageDatePicker";
import SearchInput from "./SearchInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { Form } from "react-router-dom";
import { SearchLocationContext } from "../context/SearchLocationContext";

const HomepageForm = () => {
  const [travelDate, setTravelDate] = useState(undefined);
  const ctx = useContext(SearchLocationContext);

  const addTravelHandler = async (args) => {
    const newTravel = {
      location: ctx.location.name,
      date: travelDate,
      geolocation: {
        _lat: ctx.location.lat,
        _long: ctx.location.lon,
      },
    };
    try {
      await addDoc(collection(db, "travels"), {
        ...newTravel,
      });
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ADD-FORM flex flex-col gap-4 mt-16">
      <h1 className="xl:text-xl uppercase">Plan your next adventure</h1>
      <SearchInput label="Destination" placeholder="Type your destination" />
      <div className="INPUT-BOX flex flex-col mb-3">
        <label htmlFor="date-input" className="text-sm px-1">
          Date
        </label>
        <HomepageDatePicker setTravelDate={setTravelDate} />
      </div>
      <Button onClick={addTravelHandler} text="Create" />
    </div>
  );
};

export default HomepageForm;
