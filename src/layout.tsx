import { Outlet } from "react-router"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { LayoutWrapper, Main } from "./styles/layout"

export default function AppLayout() {
  return (
    <LayoutWrapper>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </LayoutWrapper>
  )
}
