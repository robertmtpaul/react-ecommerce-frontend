import React from "react";
import { Link, HashRouter as Router } from 'react-router-dom';
import "../Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// allow us to use ContextAPI in component.

function Header(props) {
    // give current state of the cart, then 'dispatch' shoots item to the data layer i.e. cart.

    return (

        <nav className="header">
            {/* search box */}
            {/* 3 links */}
            <Link to="/" >
                <img className="header_logo" src="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png" />
            </Link>
            <div className="header_nav">
                {/* use ternary to show links depending on whether user logged in*/}
                { 
                 props.currentUser.name !== undefined  
                 ? 
                 ( 
                  <span>
                    <span>Hello {props.currentUser.name } </span>
                    {/* perform logout function on click and redirect to login page */}
                    <a href="#" onClick={(e) => {props.onLogout(e); props.history.push('/login')} }>Logout </a>
                  </span>    
                 ) 
                 : 
                 (
                    <Link to="/login">
                        <span>Sign in</span>
                    </Link>
                 )
                }                       
                <Link to="/checkout">
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