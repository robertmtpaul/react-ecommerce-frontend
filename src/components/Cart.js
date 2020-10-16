import React from "react"
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider"
import CartItem from './CartItem'

function Cart() {

    const [{ cart } ] = useStateValue()

    // const calculateGrandTotal = () => {
    //     // Set a variable to start tracking the amount all the items are costing.
    //     let grandTotal = 0
    //     // Loop through the cart's items and add up all their prices.
    //     cart.forEach(cartItem => {
    //         grandTotal += cartItem.price
    //     });
    //     // Spit out the grand total, and add two decimal places.
    //     return grandTotal.toFixed(2)
    // }  

    // const clearCart = () => {
    //     console.log('checking for cart items', this.props.cart);
    //     localStorage.removeItem("cart")
    //     this.props.history.push('/')
    // }

    return (
        <div className="checkout">

            { cart?.length === 0 ? ( // Use ternary to check if cart is empty, and if so display a message to user.
                <div>
                    <h2>Your shopping cart is empty</h2>
                    <p>You have no items in your cart. To add, click "Add to cart" next to items.</p>
                </div>
            ) : (
                    // Otherwise show the user their cart:
                    <div>
                        <h2>Here's what you have in your cart: </h2>

                        {
                            //use .map to go through the array of items in the cart and display to the user the name, qty of the item in the cart, and an image for the item.
                            cart?.map((product) => {
                                console.log(product)
                                return (
                                    <CartItem
                                        itemName={product.name}
                                        itemId={product.id}
                                        itemPrice={product.price}
                                        itemQty={product.quantity}
                                        itemImage={product.image}
                                        itemRating={product.rating}
                                    />
                                );
                        })}
                    </div>
                )}

            <div>
                {/* Grandtotal: ${calculateGrandTotal()} */}
                <br />
                <div className="button-group">
                    <Link to='/checkout'>
                        <button className="button-primary">Pay</button>
                    </Link>
                    <button className="button-danger">Clear cart</button>
                </div>
            </div>

        </div> // checkout
    ) // return
}

export default Cart