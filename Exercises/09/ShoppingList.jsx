import {useState} from "react";

const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name ||!quantity) return;
        const newItem = {name, quantity: parseInt(quantity)};
        setItems([...items, newItem]);
        setName("");
        setQuantity("");
    }

    return <div>
    <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Item Name"/>
            <input type="number"
                   value={quantity}
                   onChange={(e) => setQuantity(e.target.value)}
                   placeholder="Quantity"/>
            <button type="submit">Add Item</button>
        </form>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.name} - {item.quantity}</li>
            ))}
        </ul>
    </div>
}

export default ShoppingList;