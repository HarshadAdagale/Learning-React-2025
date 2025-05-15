import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Weather from '/Exercises/07/Weather.jsx'
import UserStatus from "../Exercises/07/UserStatus.jsx";
import Greetings from "../Exercises/07/Greetings.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Weather temperature={22} />
    <UserStatus isLoggedIn={true} isAdmin={true} />
    <Greetings timeOfDay="morning" />.

  </StrictMode>,
)
