import React from "react";
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {

    return (

        <nav className="header">
            {/* search box */}
            {/* 3 links */}
            <Link to="/" className="header_link">
                <img className="header_logo" src="./images/logo.png" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello User</span>
                        {/* TODO : finish login page */}
                        <span className="header_optionLineTwo">Sign in</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket"></div>
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number items in the basket */}
                        <span className="header_basketCount">0</span>
                </Link>
            </div>
            {/* TODO: basket icon with number badge */}
        </nav>

    )
}

export default Header;