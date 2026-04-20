import { createBrowserRouter } from "react-router"
import AppLayout from "./layout"
import { Home } from "./pages/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
])
