import DetailsInput from "./DetailsInput";
import SelectBar from "./SelectBar";

const TransportDetails = () => {
  return (
    <div className="ACCOMODATION FORM flex flex-col gap-4">
      <span className="uppercase underline">Transport</span>
      <div className="flex flex-col gap-4">
        <span className="underline">To Oslo:</span>
        <SelectBar
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
          label="Reservation number"
          placeholder="Enter your reservation number"
        />
        <DetailsInput
          label="City of departure"
          placeholder="Enter your city of departure"
        />
        <DetailsInput
          label="Time of departure"
          placeholder="Enter your time of departure"
        />
      </div>
      ADD ANOTHER ROUTE
      <div className="flex flex-col gap-4 mt-4">
        <span className="underline">From Oslo:</span>
        <SelectBar
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
          label="Reservation number"
          placeholder="Enter your reservation number"
        />
        <DetailsInput
          label="City of departure"
          placeholder="Enter your city of departure"
        />
        <DetailsInput
          label="Time of departure"
          placeholder="Enter your time of departure"
        />
      </div>
      ADD ANOTHER ROUTE
    </div>
  );
};

export default TransportDetails;
