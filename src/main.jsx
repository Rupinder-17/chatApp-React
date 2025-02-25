import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PageProvider } from './context/PageContext'
import { Index } from './pages/Index'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PageProvider>
        <Index />
      </PageProvider>
    </BrowserRouter>
  </StrictMode>
);

