import React from 'react'
import '../Cart.css'
import '../CartItem.css'
import { useStateValue } from '../StateProvider'

function CartItem({ name, id, price, image, qty, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    console.log(name, id, price, image, qty, rating)
    const removeFromCart = () =>  {
        // remove selected item from cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    };

    return (
        <div className="cartItem">
            <img src={image} className="cartItem_image" alt={name} />
            <div className="cartItem_details">
                <p className="cartItem_name">{name}</p>
                <p>in stock: {qty}</p>
                <p className="cartItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartItem_rating">
                    <p>Rating: </p>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>

                <button onClick={removeFromCart}>Remove item</button>
            </div>


        </div>
    )
}

export default CartItem
