import { createContext, useState } from "react";

export const SearchLocationContext = createContext();

export const SearchLocationProvider = (props) => {
  const [location, setLocation] = useState(undefined);
  const clearContext = () => {
    setLocation("");
  };
  return (
    <SearchLocationContext.Provider value={{ location, setLocation, clearContext }}>
      {props.children}
    </SearchLocationContext.Provider>
  );
};
