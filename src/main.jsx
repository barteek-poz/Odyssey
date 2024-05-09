import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Travels from "./pages/Travels.jsx";
import { SearchLocationProvider } from "./context/SearchLocationContext.jsx";
import { travelsLoader } from "./loaders/travelsLoader.js";
import TravelDetails from "./pages/TravelDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, loader: travelsLoader },
  {
    path: "/travels",
    element: <Travels />,
    loader: travelsLoader,
  },
  {
    path: '/id',
    element: <TravelDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchLocationProvider>
      <RouterProvider router={router}></RouterProvider>
    </SearchLocationProvider>
  </React.StrictMode>
);
