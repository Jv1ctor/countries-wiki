import { Outlet } from "react-router"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Main } from "./styles/layout"

export default function AppLayout() {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  )
}
