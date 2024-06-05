import { useContext } from "react";
import LOGO from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { SearchLocationContext } from "../context/SearchLocationContext";
const Navigation = () => {
  const ctx = useContext(SearchLocationContext);
  return (
    <nav className="NAVIGATION flex items-center p-4">
      <Link to="/" className="LOGO ml-4" onClick={ctx.clearContext}>
        <img src={LOGO} alt="odyssey-logo" />
      </Link>
      <ul className="NAVIGATION-LIST flex-1 flex items-center justify-end gap-24 mr-24">
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
    </nav>
  );
};

export default Navigation;
