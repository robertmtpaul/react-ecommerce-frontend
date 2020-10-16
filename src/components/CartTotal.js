import React from 'react'
import '../CartTotal.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function CartTotal() {
    const [{ cart}, dispatch] = useStateValue()

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
                    <Link to='/checkout'>
                        <button className="button-primary">Go to checkout</button>
                    </Link>
                    <button className="button-danger">Clear cart</button>
                </div>
        </div>
    )
}

export default CartTotal
