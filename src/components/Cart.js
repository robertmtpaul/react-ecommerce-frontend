import React from "react"
import CartItem from './CartItem'
import { Link, HashRouter as Router } from 'react-router-dom';
import { ThreeSixtySharp } from "@material-ui/icons";

class Cart extends React.Component {

    // TODO: cartUpdate function?
    // TODO : add remove item from cart

    
    calculateGrandTotal() {
        // Set a variable to start tracking the amount all the items are costing.
        let grandTotal = 0
        // Loop through the cart items and multiply the quantities of each item by their respective price.
        this.props.cart.forEach(cartItem => {
            grandTotal += cartItem.product.price * cartItem.qty
        });
        // Spit out the grand total, and add two decimal places.
        return grandTotal.toFixed(2)
    }
    
    clearCart() {
        console.log('checking for cart items', this.props.cart);
        localStorage.removeItem("cart")
        this.props.history.push('/')
    }
    

    render() {
        return (
            <div>
                <h5>Here's a detailed breakdown of your cart:</h5>
                <div>
                    {
                        //use .map to go through the array of items in the cart and display to the user the name, qty of the item in the cart, and an image for the item.
                        this.props.cart.map(c =>
                            <CartItem
                                itemName={c.product.name}
                                itemId={c.product._id}
                                itemQty={c.qty}
                                itemImage={c.product.image}
                                removeItem={this.props.removeItem}
                            />
                        ) 
                    }
                    
                    Grandtotal: ${this.calculateGrandTotal()}
                    <br />
                    <div className="button-group">
                        <Link to='/checkout'>
                            <button className="button-primary">Pay</button>
                        </Link>
                        <button className="button-danger" onClick={() => this.clearCart() }>Clear cart</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart