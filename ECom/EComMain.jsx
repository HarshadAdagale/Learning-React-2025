import React from "react";
import Navigation from './Navigation/Nav.jsx';
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css";

const EComMain = () => {
    return  <>
            < Sidebar />
            < Navigation />
            < Recommended />
            < Products />
            </>
}

export default EComMain;
