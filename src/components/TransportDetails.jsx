import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import TransportForm from "./TransportForm";

const TransportDetails = () => {
  const { transportList, location } = useLoaderData();
  console.log(transportList)
  const [transportData, setTransportData] = useState(transportList);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);

  const updateTransportDataHandler = async (
    direction,
    category,
    inputValue
  ) => {
    let updatedTransport;
    if (direction === "to") {
      updatedTransport = {
        to: {
          ...transportData?.to,
          [category]: inputValue,
        },
        from: {
          ...transportData?.from,
        },
      };
    } else {
      updatedTransport = {
        to: {
          ...transportData?.to,
        },
        from: {
          ...transportData?.from,
          [category]: inputValue,
        },
      };
    }
    await updateDoc(currentTravel, {
      transport: updatedTransport,
    });
    setTransportData(updatedTransport);
  };

  return (
    <div className="TRANSPORT FORM flex flex-col gap-4 mr-4 md:mr-0 md:ml-8">
      <span className="uppercase underline">Transport</span>
      <span className="underline">To {transportData[0].placeArrival}:</span>
      <TransportForm
        transportDirection="to"
        transportInfo={transportData[0].placeArrival}
        updateTransportDataHandler={updateTransportDataHandler}
      />
    
      <span className="underline mt-4">From {transportData[1].placeDeparture}:</span>
      <TransportForm
        transportDirection="from"
        transportInfo={transportData[1].placeArrival}
        updateTransportDataHandler={updateTransportDataHandler}
      />
      
    </div>
  );
};

export default TransportDetails;
