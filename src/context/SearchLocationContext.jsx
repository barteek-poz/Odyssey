import { createContext, useState } from "react";

export const SearchLocationContext = createContext();

export const SearchLocationProvider = (props) => {
  const [location, setLocation] = useState("");

  return (
    <SearchLocationContext.Provider value={{ location, setLocation }}>
      {props.children}
    </SearchLocationContext.Provider>
  );
};
