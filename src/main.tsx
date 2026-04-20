import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { GlobalStyles } from "./styles/global.ts"
import { RouterProvider } from "react-router"
import { router } from "./router.tsx"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
