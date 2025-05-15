const name = "Jhon";
const date = new Date();

const ExpressionInJSX = () => {
    return <>
    <h1>Hello {name}</h1>
    <p>Date: {date.getDate()}</p>
    </>
}

export default ExpressionInJSX;