import React from "react";
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import "./Header.css"

function Header() {

    return (
        
        <nav>
            {/* search box */}
            {/* 3 links */}
            <Link to="/">
                <img className="logo" src="./images/logo.png" />
            </Link>
            <div>
                {/* TODO : conditional logic to show currentUser */}
                <p>Why hello there, [currentUser]</p>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart |</a>
                <a href="signin.html"> Sign in </a>
                {/* TODO: basket icon with number badge */}
            </div>
        </nav>

    )
}

export default Header;