import { useContext, useEffect, useState } from "react";
import LOGO from "../assets/logo.svg";
import BURGER_MENU from "../assets/burger.svg";
import CLOSE from "../assets/close.svg";
import { Link, NavLink } from "react-router-dom";
import { SearchLocationContext } from "../context/SearchLocationContext";
import useScreenWidth from "../hooks/useScreenWidth";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { screenWidth } = useScreenWidth();
  const mobileMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (screenWidth >= 640) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false)
    }
  }, [screenWidth]);
  const ctx = useContext(SearchLocationContext);
  return (
    <nav className="NAVIGATION fixed sm:relative w-full z-10 top-0 bg-white flex items-center justify-between sm:p-4">
      <Link to="/" className="LOGO ml-4 p-4 sm:p-0" onClick={ctx.clearContext}>
        <img src={LOGO} alt="odyssey-logo" />
      </Link>
      {menuOpen ? (
        ""
      ) : (
        <button onClick={mobileMenuHandler}>
          <img
            src={BURGER_MENU}
            alt="burger-menu"
            className="BURGER-MENU w-7 cursor-pointer sm:hidden mr-4"
          />
        </button>
      )}

      {menuOpen && (
        <ul className="NAVIGATION-LIST absolute sm:relative w-full flex z-50 top-0 bg-navBackground sm:bg-white h-screen sm:h-full flex-col sm:flex-row items-center justify-center sm:justify-end gap-12 sm:gap-24 mr-12 lg:mr-24 ">
          <button onClick={mobileMenuHandler}>
            <img
              src={CLOSE}
              alt="close-icon"
              className="CLOSE-ICON w-7 absolute top-4 right-4 sm:hidden"
            />
          </button>

          <li>
            <NavLink
              to="/"
              onClick={ctx.clearContext}
              className={({ isActive }) =>
                isActive
                  ? `border-b border-black transform duration-300 py-1`
                  : `border-b border-white transform duration-300 hover:border-black py-1`
              }>
              Add new travel
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={ctx.clearContext}
              to="/travels"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-black transform duration-300 py-1`
                  : `border-b border-white transform duration-300 hover:border-black py-1`
              }>
              Your travels
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
