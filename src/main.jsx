import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FocusInput from "../Exercises/13/FocusInput.jsx";
import Timer from "../Exercises/13/Timer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FocusInput />
    <Timer />

  </StrictMode>,
)
