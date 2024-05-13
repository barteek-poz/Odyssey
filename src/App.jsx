import { SearchLocationProvider } from "./context/SearchLocationContext";
import Homepage from "./pages/Homepage";
import Travels from "./pages/Travels";
import "../index.css";
const App = () => {
  return (
    <SearchLocationProvider>
      <Homepage />
    </SearchLocationProvider>
  );
};

export default App;
