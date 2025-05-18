import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BasicEffect from "../Exercises/10/BasicEffect.jsx";
import CounterEffect from "../Exercises/10/CounterEffect.jsx";
import FetchDataEffect from "../Exercises/10/FetchDataEffect.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<BasicEffect />*/}
    {/*<CounterEffect />*/}
    <FetchDataEffect />
  </StrictMode>,
)
