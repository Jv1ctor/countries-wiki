import { Outlet } from "react-router"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

export default function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
