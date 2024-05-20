import { useLoaderData } from "react-router-dom";
import TransportForm from "./TransportForm";

const TransportDetails = () => {
  const loaderData = useLoaderData();
  return (
    <div className="TRANSPORT FORM flex flex-col gap-4">
      <span className="uppercase underline">Transport</span>
      <span className="underline">To {loaderData.location}:</span>
      <TransportForm
        transportType={loaderData.transport?.to.type}
        ticketNumber={loaderData.transport?.to.ticketNumber}
        cityDeparture={loaderData.transport?.to.cityDeparture}
        timeDeparture={loaderData.transport?.to.timeDeparture}
        timeArrival={loaderData.transport?.to.timeArrival}
      />
      ADD ANOTHER ROUTE
      <span className="underline mt-4">From {loaderData.location}:</span>
      <TransportForm
        transportType={loaderData.transport?.from.type}
        ticketNumber={loaderData.transport?.from.ticketNumber}
        cityDeparture={loaderData.transport?.from.cityArrival}
        timeDeparture={loaderData.transport?.from.timeDeparture}
        timeArrival={loaderData.transport?.from.timeArrival}
      />
      ADD ANOTHER ROUTE
    </div>
  );
};

export default TransportDetails;
