import React from 'react'
import '../Cart.css'

function CartItem(props) {

    return (
        <div className="cartItem">
            {props.itemName}, x{props.itemQty}
            <br />
            <img src={props.itemImage} className="checkout-thumbnail" />
            <button onClick={ () => props.removeItem(props.itemId)}>Remove item</button>
        </div>
    )
}

export default CartItem
