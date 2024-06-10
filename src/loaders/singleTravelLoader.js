import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore";

export const singleTravelLoader = async (params) => {
  let travel;
  const docRef = doc(db, "travels", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    travel = docSnap.data();
  } else {
    console.log("No such document!");
  }
  return travel;
};
