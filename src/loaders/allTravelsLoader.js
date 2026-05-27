import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const allTravelsLoader = async () => {
  try{
  const travels = [];
  const travelsFetch = await fetch("http://localhost:8080/api/travels/1");
  if(!travelsFetch.ok) {
    throw Error("Travels fetch error")
  }
  const travelData = await travelsFetch.json()
  console.log(travelData);
  travels.push(travelData)
  return travels
}
  catch(error){
    console.log(error)
  }
  
};
