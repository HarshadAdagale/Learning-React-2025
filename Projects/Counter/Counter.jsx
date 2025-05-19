import {useState} from "react";
import './style.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    const reset = () => setCount(0);

    return <div className="container">
                 <div>
                 <h1 className="number">{count}</h1>
                 </div>

                <div className="btns-container ">
                    <button className="increment" onClick={decrement} >-</button>
                    <button className="increment" onClick={reset} >Reset</button>
                    <button className="increment" onClick={increment} >+</button>
                </div>
            </div>
}

export default Counter;