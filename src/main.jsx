import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContext from '/Exercises/11/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserContext />

  </StrictMode>,
)
