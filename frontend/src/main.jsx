import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteApp from './services/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>,
)
