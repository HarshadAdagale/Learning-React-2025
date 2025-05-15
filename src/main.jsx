import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Person from "../Exercises/06/Person.jsx";
import Product from "../Exercises/06/Product.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Person name="Harshad" age="21"/>
    <Product name="iPhone" price="1000" />
  </StrictMode>,
)
