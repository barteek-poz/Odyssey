import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const allTravelsLoader = async () => {
  try{
  const travelsFetch = await fetch("http://localhost:8080/api/travels");
  if(!travelsFetch.ok) {
    throw Error("Travels fetch error")
  }
  const travelsData = await travelsFetch.json()
  return travelsData
}
  catch(error){
    console.log(error)
  }
  
};
