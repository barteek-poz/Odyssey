import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore";

export const singleTravelLoader = async (params) => {
 try{
  const travelFetch = await fetch(`http://localhost:8080/api/travels/${params.id}`);
  if(!travelFetch.ok) {
    throw Error("Travel fetch error")
  }
  const travelData = await travelFetch.json()
  return travelData
}
  catch(error){
    console.log(error)
  }
};
