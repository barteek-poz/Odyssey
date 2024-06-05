import { Link } from "react-router-dom";
import logoIcon from "../assets/logo.svg";
const ErrorPage = () => {
  return (
    <div className="ERROR-PAGE w-full h-full flex flex-col items-center justify-center gap-4">
      <img src={logoIcon} alt="logo-icon" className="w-52" />
      <h1 className="text-2xl">
        Sorry, something went wrong. Please return to our{" "}
        <Link to="/" className="underline cursor-pointer">
          homepage
        </Link> or try again later.
      </h1>
    </div>
  );
};

export default ErrorPage;
