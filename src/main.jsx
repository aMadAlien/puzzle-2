import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SavedModulesProvider from './context/SavedModulesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SavedModulesProvider>
      <App />
    </SavedModulesProvider>
  </StrictMode>,
)
