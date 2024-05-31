import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import TransportForm from "./TransportForm";

const TransportDetails = () => {
  const { transport, location } = useLoaderData();
  const [transportData, setTransportData] = useState(transport);
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
    <div className="TRANSPORT FORM flex flex-col gap-4">
      <span className="uppercase underline">Transport</span>
      <span className="underline">To {location}:</span>
      <TransportForm
        transportDirection="to"
        transportInfo={transport?.to}
        updateTransportDataHandler={updateTransportDataHandler}
      />
      ADD ANOTHER ROUTE
      <span className="underline mt-4">From {location}:</span>
      <TransportForm
        transportDirection="from"
        transportInfo={transport?.from}
        updateTransportDataHandler={updateTransportDataHandler}
      />
      ADD ANOTHER ROUTE
    </div>
  );
};

export default TransportDetails;
