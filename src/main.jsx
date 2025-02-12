import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PageProvider } from './context/PageContext'
import { Index } from './pages/Index'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageProvider>
      <Index/>
    </PageProvider>
  </StrictMode>
);

