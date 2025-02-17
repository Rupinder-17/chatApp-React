import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PageProvider } from './context/PageContext'
import { BrowserRouter } from 'react-router'
import App from './App'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageProvider>
  </StrictMode>
);

