import { useContext, useState } from "react";
import { SearchLocationContext } from "../context/SearchLocationContext";

const SearchInput = ({ label, placeholder }) => {
  const [searchList, setSearchList] = useState("");
  const [inputValue, setInputValue] = useState("");
  const ctx = useContext(SearchLocationContext);
  const SEARCH_URL = `https://nominatim.openstreetmap.org/search?`;
  const searchLocationHandler = (value) => {
    const params = {
      q: value,
      format: "json",
      addressDetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${SEARCH_URL}${queryString}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setSearchList(res);
      })
      .catch((err) => console.log(err));
  };

  const inputChangeHandler = (value) => {
    setInputValue(value);
    searchLocationHandler(value);
  };
  console.log(searchList);
  return (
    <div className="INPUT-BOX flex flex-col">
      <label htmlFor="search-input" className="text-sm px-1 pb-1">
        {label}
      </label>
      <input
        value={inputValue}
        onChange={(e) => inputChangeHandler(e.target.value)}
        type="text"
        id="search-input"
        name="search-input"
        placeholder={placeholder}
        className="SEARCH-INPUT border border-black rounded-lg w-1/2 h-8 px-1.5 outline-1 outline-outlineColor placeholder-placeholderColor"
      />
      {searchList?.length > 0 && (
        <ul className="SEARCH-LIST flex flex-col gap-1 p-2 ">
          {searchList?.slice(0, 3).map((place) => {
            return (
              <li
                className="cursor-pointer"
                key={place.place_id}
                onClick={() => {
                  setInputValue(place.name);
                  ctx.setLocation(place);
                  setSearchList([]);
                }}>
                {place.display_name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
