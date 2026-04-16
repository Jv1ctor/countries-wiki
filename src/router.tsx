import { createBrowserRouter } from "react-router"
import App from "./App"
import AppLayout from "./layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <App /> }],
  },

  {
    path: "/ping",
    element: <div>pong</div>,
  },
])
