import React from "react"
import { useStateValue } from "../StateProvider"
import CartItem from './CartItem'
import '../Cart.css'
import CartTotal from './CartTotal'

function Cart() {

    const [{ cart }] = useStateValue()

    // const clearCart = () => {
    //     console.log('checking for cart items', this.props.cart);
    //     localStorage.removeItem("cart")
    //     this.props.history.push('/')
    // }

    return (
        <div className="cart">

            <div className="cartItems">

                {cart?.length === 0 ? ( // Use ternary to check if cart is empty, and if so display a message to user.
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>You have no items in your cart. To add, click "Add to cart" next to items.</p>
                    </div>
                ) : (
                        // Otherwise show the user their cart:
                        <div>
                            <h2>Shopping cart: </h2>

                            {
                                //use .map to go through the array of items in the cart and display to the user the name, qty of the item in the cart, and an image for the item.
                                cart?.map((product) => {
                                    console.log(product)
                                    return (
                                        <CartItem
                                            name={product.name}
                                            id={product.id}
                                            price={product.price}
                                            qty={product.quantity}
                                            image={product.image}
                                            rating={product.rating}
                                        />
                                    );
                                })}
                        </div>
                    )}
            </div> {/* cartItems */}

            {cart.length > 0 && ( // if there are items in the cart, display this:
                <div className="cartTotal">
                    <CartTotal />
                </div>
            )}  
        </div> // cart
    ); // return
}

export default Cart