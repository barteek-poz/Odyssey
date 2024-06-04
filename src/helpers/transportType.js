import airplaneIcon from "../assets/airplane.svg";
import busIcon from "../assets/bus.svg";
import trainIcon from "../assets/train.svg";
import carIcon from "../assets/car.svg";
import walkIcon from "../assets/walk.svg";
const transportType = (type) => {
  if (type === "plane") {
    return airplaneIcon;
  } else if (type === "car") {
    return carIcon;
  } else if (type === "train") {
    return trainIcon;
  } else if (type === "bus") {
    return busIcon;
  } else return walkIcon;
};

export default transportType;
