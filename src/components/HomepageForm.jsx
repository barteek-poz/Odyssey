import { useContext, useEffect, useState } from "react";
import HomepageDatePicker from "./HomepageDatePicker";
import SearchInput from "./SearchInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { useNavigate } from "react-router-dom";
import { SearchLocationContext } from "../context/SearchLocationContext";
import getTravelPhoto from "../helpers/getTravelPhoto";

const HomepageForm = () => {
  const [travelDate, setTravelDate] = useState(undefined);
  const [formError, setFormError] = useState(false);
  const ctx = useContext(SearchLocationContext);
  const navigate = useNavigate();


  const addTravelHandler = async () => {
    try {
      if (travelDate === undefined || ctx.location === undefined || ctx.location === '') {
        setFormError(true);
      } else {
        setFormError(false);
        const travelPhoto = await getTravelPhoto(
          ctx.location.name.toLowerCase()
        );
        const newTravelData = {
          location: ctx.location.name,
          date: travelDate,
          geolocation: {
            _lat: ctx.location.lat,
            _long: ctx.location.lon,
          },
          img: travelPhoto
            ? travelPhoto.results[0].urls.regular
            : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          expenses: [],
        };
        const newTravel = await addDoc(collection(db, "travels"), {
          ...newTravelData,
        });

        navigate(`/travels/${newTravel.id}`);
      }
    } catch (error) {
      alert(error);
    }
  };
  console.log(travelDate);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTravelHandler();
      }}
      className="ADD-FORM flex flex-col mt-16">
      <h1 className="xl:text-xl uppercase mb-4">Plan your next adventure</h1>
      <SearchInput
        label="Destination"
        placeholder="Type your destination"
        setFormError={setFormError}
      />
      <div className="INPUT-BOX flex flex-col mb-3">
        <label htmlFor="date-input" className="text-sm px-1 mt-4">
          Date
        </label>
        <HomepageDatePicker
          setTravelDate={setTravelDate}
          setFormError={setFormError}
        />
      </div>
      {formError && (
        <p className="ERROR text-red-500">Please, fill out all fields </p>
      )}
      <button
        className={`BUTTON border border-black rounded-lg mt-4 w-24 h-8 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300`}>
        Create
      </button>
    </form>
  );
};

export default HomepageForm;
