import React from 'react'
import '../Cart.css'
import '../CartItem.css'
import { useStateValue } from '../StateProvider'

function CartItem({ itemName, itemId, itemPrice, itemImage, itemQty, itemRating }) {
    const [{ cart }, dispatch] = useStateValue();
    console.log(itemName, itemId, itemImage, itemRating, itemPrice)
    const removeFromCart = () =>  {
        // remove selected item from cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id: itemId,
        });
    };

    return (
        <div className="cartItem">
            <img src={itemImage} className="cartItem_image" alt={itemName} />
            <div className="cartItem_details">
                <p className="cartItem_name">{itemName}</p>
                <p>in stock: {itemQty}</p>
                <p className="cartItem_price">
                    <small>$</small>
                    <strong>{itemPrice}</strong>
                </p>
                <div className="cartItem_rating">
                    <p>Rating: </p>
                    {Array(itemRating)
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
