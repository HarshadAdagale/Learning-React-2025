import {useState} from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


    return <>
            <div>
                <h1>TodoList</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a New Todo"/>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
           </>
}

export default TodoList;