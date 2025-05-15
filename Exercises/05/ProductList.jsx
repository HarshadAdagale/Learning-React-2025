const ProductList = () => {

    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];

    return <>
        {products.map((product)=> (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
            </div>
        ))}
    </>
}

export default ProductList;