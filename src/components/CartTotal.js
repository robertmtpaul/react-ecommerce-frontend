import React from 'react'
import '../CartTotal.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function CartTotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue()

    const calculateGrandTotal = () => {
        // Set a variable to start tracking the amount all the items are costing.
        let grandTotal = 0
        // Loop through the cart's items and add up all their prices.
        cart.forEach(cartItem => {
            grandTotal += cartItem.price
        });
        // Spit out the grand total, and add two decimal places.
        return grandTotal.toFixed(2)
    }


    return (
        <div>
            Grandtotal: ${calculateGrandTotal()}
            <div className="button-group">
                <button className="button-primary" onClick={e => history.push('/payment') // pushes the user somewhere, instead of using link.
                }>Go to checkout</button>
                <button className="button-danger">Clear cart</button>
            </div>
        </div>
    )
}

export default CartTotal
