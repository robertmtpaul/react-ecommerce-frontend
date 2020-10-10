import React from 'react'
import '../Cart.css'

function CartItem(props) {

    return (
        <div className="cartItem">
            {props.itemName}, in stock: {props.itemQty}
            <img src={props.itemImage} className="checkout-thumbnail" alt={props.itemName} />
            <button onClick={ () => props.removeItem(props.itemId)}>Remove item</button>
        </div>
    )
}

export default CartItem
