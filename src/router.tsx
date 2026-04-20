import { createBrowserRouter } from "react-router"
import AppLayout from "./layout"
import { Home } from "./pages/home"
import { allCountriesLoader } from "./loaders/all-countries.loader"
import { regionCountriesLoader } from "./loaders/region-countries.loader"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home />, loader: allCountriesLoader },
      { path:"/:region", element: <Home />, loader: regionCountriesLoader}
    ],
  },
])
