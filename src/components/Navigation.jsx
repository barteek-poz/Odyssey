import LOGO from "../assets/logo.svg";
const Navigation = () => {
  return (
    <nav className="NAVIGATION flex items-center p-4">
      <a href="home" className="LOGO ml-4">
        <img src={LOGO} alt="odyssey-logo" />
      </a>
      <ul className="NAVIGATION-LIST flex-1 flex items-center justify-end gap-24 mr-24">
        <li className="NAVIGATION-ELEMENT border-b border-white transform duration-300 hover:border-black">
          <a href="new-travel">Add new travel</a>
        </li>
        <li className="NAVIGATION-ELEMENT border-b border-white transform duration-300 hover:border-black">
          <a href="travels">Your travels</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
