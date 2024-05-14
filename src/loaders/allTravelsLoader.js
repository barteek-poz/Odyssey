import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const allTravelsLoader = async () => {
  const travels = [];
  const querySnapshot = await getDocs(collection(db, "travels"));
  querySnapshot.forEach((doc) => {
    travels.push({id:doc.id, ...doc.data()});
  });
  return travels
};
