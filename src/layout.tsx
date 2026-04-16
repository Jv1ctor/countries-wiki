import { Outlet } from "react-router";

export default function AppLayout() {
  return(
    <>
      <header>Header global</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  )
}