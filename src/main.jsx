import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from "../Exercises/09/Counter.jsx";
import TodoList from "../Exercises/09/TodoList.jsx";
import Profile from "../Exercises/09/Profile.jsx";
import ShoppingList from "../Exercises/09/ShoppingList.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <TodoList />
    <Profile />
    <ShoppingList />
  </StrictMode>,
)
