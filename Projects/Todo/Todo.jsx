import { useState } from "react";
import './style.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 500)
            });
        });
    setInput("");
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    }

    // setTodos((todos) => todos.filter((t) => t.id !== id));

    return <div className="container">
                <input
                    type="text"
                    value={input}
                    placeholder="New Todo"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>

                <ul className="todos-list">
                    {todos.map(({text, id}) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button className="close" onClick={() => removeTodo(id)}>X</button>
                        </li>
                    ))}
                </ul>
    </div>
}

export default Todo;