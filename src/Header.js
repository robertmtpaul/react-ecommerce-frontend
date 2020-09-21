import React from "react";
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import "./Header.css"

function Header() {

    return (
        
        <nav>
            {/* search box */}
            {/* 3 links */}
           
            <div className="brand">
                <Link to="/">E-commerce store</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign in </a>
            </div>
        </nav>

    )
}

export default Header;