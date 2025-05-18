import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer.jsx";

const Counter = () => {

   const [state, dispatch] = useReducer(counterReducer, initialState);
   const [inputValue, setInputValue] = useState(0);

   const handleIncrement = () => dispatch({type: "increment"});
   const handleDecrement = () => dispatch({type: "decrement"});
   const handleReset = () => dispatch({type: "reset"});

   const handleIncrementByAmount = () => {
       dispatch({type: "incrementByAmount", payload: +inputValue});
       setInputValue(0);
   }

   const handleDecrementByAmount = () => {
       dispatch({type: "decrementByAmount", payload: +inputValue});
       setInputValue(0);
   }
    return  <div>
                <h2>Count: {state.count}</h2>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <br />
                <br />
                <button onClick={handleIncrementByAmount}>Increment by Amount</button>
                <button onClick={handleDecrementByAmount}>Decrement by Amount</button>
                <br />
                <br />
                <input type="number"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
}

export default Counter;