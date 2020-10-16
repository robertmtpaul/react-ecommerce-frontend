import React from "react";
import { Link } from 'react-router-dom';
import "../Header.css"
// import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
// allow us to use ContextAPI in component.
import { useStateValue } from "../StateProvider";

function Header(props) {
    const [{ cart }] = useStateValue();
    // give current state of the cart, then 'dispatch' shoots item to the data layer i.e. cart.
    console.log(cart)
    return (

        <nav className="header">

            <Link to="/" >
                <img className="header_logo" src="images/logo.svg" alt="shopping cart logo"/>
            </Link>
            <div>
                <h5>Mercadillo</h5>

            </div>
            <div className="header_nav">
                
                {  // use ternary to show links depending on whether user logged in
                 props.currentUser.name !== undefined  
                 ? 
                 ( 
                  <span>
                    <span>Hello, {props.currentUser.name } </span>

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
                <Link to="/cart">
                    <div className="header_optionCart"></div>
                        <ShoppingBasketIcon />
                        <span className="header_cartCount">{cart.length}</span>
                </Link>
            </div>
        </nav>

    )
}

export default Header;