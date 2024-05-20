import DetailsInput from "./DetailsInput";
import SelectBar from "./SelectBar";

const TransportForm = ({
  transportType,
  ticketNumber,
  cityDeparture,
  timeDeparture,
  timeArrival
}) => {
  return (
    <div className="flex flex-col gap-4">
      <SelectBar
        initialValue={transportType ? transportType : 'Select your form of transport'}
        placeholder="Select your form of transport"
        options={[
          { value: "plane", label: "Plane" },
          { value: "bus", label: "Bus" },
          { value: "train", label: "Train" },
          { value: "car", label: "Car" },
          { value: "other", label: "Other" },
        ]}
      />
      <DetailsInput
        initialValue={ticketNumber}
        label="Ticket number"
        placeholder="Enter your ticket number"
      />
      <DetailsInput
        initialValue={cityDeparture}
        label="City of departure"
        placeholder="Enter your city of departure"
      />
      <DetailsInput
        initialValue={timeDeparture}
        label="Time of departure"
        placeholder="Enter your time of departure"
      />
      <DetailsInput
        initialValue={timeArrival}
        label="Time of arrival"
        placeholder="Enter your time of arrival"
      />
    </div>
  );
};

export default TransportForm;
