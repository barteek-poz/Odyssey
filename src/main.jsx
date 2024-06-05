import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Travels from "./pages/Travels.jsx";
import { SearchLocationProvider } from "./context/SearchLocationContext.jsx";
import { allTravelsLoader } from "./loaders/allTravelsLoader.js";
import TravelDetails from "./pages/TravelDetails.jsx";
import { singleTravelLoader } from "./loaders/singleTravelLoader.js";
import ErrorPage from "./pages/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    loader: allTravelsLoader,
    errorElement: <ErrorPage/>
    
  },
  {
    path: "/travels",
    element: <Travels />,
    loader: allTravelsLoader,
    errorElement: <ErrorPage/>
  },
  {
    path: "/travels/:id",
    element: <TravelDetails />,
    loader: ({ params }) => {
      return singleTravelLoader(params);
    },
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchLocationProvider>
      <RouterProvider router={router}></RouterProvider>
    </SearchLocationProvider>
  </React.StrictMode>
);
