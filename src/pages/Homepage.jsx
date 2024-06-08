import LOGO from "../assets/logo.svg";
import TravelSmall from "../components/TravelSmall";
import ButtonRound from "../components/ButtonRound";
import Map from "../components/Map";
import HomepageForm from "../components/HomepageForm";
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { homepageTravels } from "../helpers/homepageTravels";
import { SearchLocationContext } from "../context/SearchLocationContext";
import sortTravels from "../helpers/sortTravels";

const Homepage = () => {
  const [travelsToDisplay, setTravelsToDisplay] = useState(() => {
    return homepageTravels(window.innerWidth);
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const loaderTravels = useLoaderData();
  const sortedTravels = sortTravels(loaderTravels);
  const ctx = useContext(SearchLocationContext);
  useEffect(() => {
    const handleWindowResize = () => {
      setTravelsToDisplay(homepageTravels(window.innerWidth));
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);
  
  return (
    <section className="HOMEPAGE w-full h-full flex flex-col lg:flex-row">
      <div className="SEARCH-CONTAINER xl:w-1/2 h-full px-10 py-5">
        <header className="HEADER ">
          <img className="w-52 lg:w-32 mx-auto lg:mx-0" src={LOGO} alt="odyssey-logo" />
        </header>
        <HomepageForm />
        <section className="TRAVELS-SECTION mt-16">
          <h2 className="text-lg uppercase mt-10 mb-5 text-center sm:text-start">
            Your recent travels
          </h2>
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="TRAVELS-BOX flex items-center gap-3 lg:gap-14">
              {sortedTravels.slice(0, travelsToDisplay)?.map((travel) => {
                return (
                  <TravelSmall
                    key={travel.id}
                    img={travel.img}
                    location={travel.location}
                    date={travel.date}
                    id={travel.id}
                  />
                );
              })}
            </div>
            <Link
              to="/travels"
              className="flex flex-col items-center gap-1 ml-4 group">
              <ButtonRound size="big" onBtnClick={ctx.clearContext} />
              <span className="text-center duration-300 group-hover:border-b group-hover:border-b-black">
                View all your travels
              </span>
            </Link>
          </div>
        </section>
      </div>
      {screenWidth < 1024 ? "" :<div className="MAP-CONTAINER w-1/2 h-full">
        <Map allTravels={loaderTravels} scrollZoom={true} />
      </div>}
    </section>
  );
};

export default Homepage;
