import { SearchLocationProvider } from "./context/SearchLocationContext";
import Homepage from "./pages/Homepage";
import Travels from "./pages/Travels";
const App = () => {
  return (
    <SearchLocationProvider>
      <Homepage />
    </SearchLocationProvider>
  );
};

export default App;
