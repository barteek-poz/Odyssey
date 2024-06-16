import DetailsInput from "./DetailsInput";
import SelectBar from "./SelectBar";

const TransportForm = ({
  transportDirection,
  transportInfo,
  updateTransportDataHandler,
}) => {
  const transportInputHandler = (category, inputValue) => {
    updateTransportDataHandler(transportDirection, category, inputValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <SelectBar
        initialValue={
          transportInfo?.type
            ? transportInfo.type
            : "Select your form of transport"
        }
        placeholder="Select your form of transport"
        label="Form of transport"
        options={[
          { value: "plane", label: "Plane" },
          { value: "bus", label: "Bus" },
          { value: "train", label: "Train" },
          { value: "car", label: "Car" },
          { value: "other", label: "Other" },
        ]}
        category="type"
        setCategoryValue={transportInputHandler}
        isCheckIcon={true}
      />
      <DetailsInput
        initialValue={transportInfo?.ticketNumber}
        label="Ticket number"
        placeholder="Enter your ticket number"
        category="ticketNumber"
        type="number"
        updateDataHandler={transportInputHandler}
      />
      {transportDirection === "from" ? (
        <DetailsInput
          initialValue={transportInfo?.cityArrival}
          label="City of arrival"
          placeholder="Enter your city of arrival"
          category="cityArrival"
          updateDataHandler={transportInputHandler}
        />
      ) : (
        <DetailsInput
          initialValue={transportInfo?.cityDeparture}
          label="City of departure"
          placeholder="Enter your city of departure"
          category="cityDeparture"
          updateDataHandler={transportInputHandler}
        />
      )}
      <DetailsInput
        initialValue={transportInfo?.timeDeparture}
        label="Time of departure"
        placeholder="Enter your time of departure"
        category="timeDeparture"
        type="time"
        updateDataHandler={transportInputHandler}
      />
      <DetailsInput
        initialValue={transportInfo?.timeArrival}
        label="Time of arrival"
        placeholder="Enter your time of arrival"
        category="timeArrival"
        type="time"
        updateDataHandler={transportInputHandler}
      />
    </div>
  );
};

export default TransportForm;
