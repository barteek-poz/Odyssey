import LOGO from "../assets/logo.svg";
import TravelSmall from "../components/TravelSmall";
import ButtonRound from "../components/ButtonRound";
import Map from "../components/Map";
import HomepageForm from "../components/HomepageForm";
import { Link, useLoaderData } from "react-router-dom";
const Homepage = () => {
  const loaderTravels = useLoaderData();
  console.log(loaderTravels);
  return (
    <section className="HOMEPAGE w-full h-full flex">
      <div className="SEARCH-CONTAINER xl:w-1/2 px-10 py-5">
        <header className="HEADER">
          <img className="xl:w-32" src={LOGO} alt="odyssey-logo" />
        </header>
        <HomepageForm />
        <section className="TRAVELS-SECTION mt-16">
          <h2 className="xl:text-lg uppercase mt-10 mb-5">
            Your recent travels
          </h2>
          <div className="flex items-center">
            <div className="TRAVELS-BOX flex items-center gap-14">
              {loaderTravels?.map((travel) => {
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
              <ButtonRound />{" "}
              <span className="text-center duration-300 group-hover:border-b group-hover:border-b-black">
                View all your travels
              </span>
            </Link>
          </div>
        </section>
      </div>
      <div className="MAP-CONTAINER xl:w-1/2">
        <Map allTravels={loaderTravels} />
      </div>
    </section>
  );
};

export default Homepage;
