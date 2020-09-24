import React from "react"

function Checkout (props) {

        return (
            <div>
            <h1>Here's what you have in your cart right now:</h1>
            <div>
                {   // List all of the products currently in the cart from App.js props.
                    // props.cart.map(c => <p>{c.productId}: {c.qty}</p>)
                }
            </div>
        

        </div>
        );
    }

export default Checkout