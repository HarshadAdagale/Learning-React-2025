import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StyleCard from "../Exercises/08/StyleCard.jsx";
import ProfileCard from "../Exercises/08/ProfileCard.jsx";
import IconComponent from "../Exercises/08/IconComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StyleCard />
    <ProfileCard />
    <IconComponent />
  </StrictMode>,
)
