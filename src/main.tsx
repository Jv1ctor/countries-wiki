import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/global.ts'
import { RouterProvider } from 'react-router'
import { router } from './router.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
