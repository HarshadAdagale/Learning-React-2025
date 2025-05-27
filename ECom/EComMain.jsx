import React, {useState} from "react";
import Navigation from './Navigation/Nav.jsx';
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css";

//Database

import products from "./db/data.jsx";
import Card from "./components/Card.jsx";

const EComMain = () => {

        const [selectedCategory, setSelectedCategory] = useState(null);


        const [query, setQuery] = useState("");

        //Input Filter
        const handleInputChange = (e) => {
                setQuery(e.target.value);
        }

        //Filter Products

        const filteredItems = products.filter(
            (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );

        //Radio Filter

        const handleChange = (e) => {
                setSelectedCategory(e.target.value);
        }

        //Button Filter

        const handleClick = (e) => {
                setSelectedCategory(e.target.value);
        }

        const filteredData = (products, selected, query) => {

                let filteredProducts = products;

                //Filtering Input Items

                if (query) {
                        filteredProducts = filteredItems
                }

        //Selected Filter

                if(selected) {
                        filteredProducts = filteredProducts.filter(
                            ({category, color, company, newPrice, title}) =>
                                category === selected ||
                                color === selected ||
                                company === selected ||
                                newPrice === selected ||
                                title === selected
                        );
                }


                return filteredProducts.map (
                    ({ img, title, star, reviews, prevPrice, newPrice }) => (
                        < Card key = {Math.random() * 10000}
                               img = {img}
                                title = {title}
                                star = {star}
                                reviews = {reviews}
                                prevPrice = {prevPrice}
                                newPrice = {newPrice}
                        />
                    )

                )
        }

        const result = filteredData(products, selectedCategory, query)

        return  <>
            < Sidebar handleChange={handleChange}/>
            < Navigation query={query} handleInputChange={handleInputChange} />
            < Recommended handleClick={handleClick} />
            < Products result={result} />
            </>
}

export default EComMain;
