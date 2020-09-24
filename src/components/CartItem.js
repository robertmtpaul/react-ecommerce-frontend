import React from 'react'
import '../Cart.css'

function CartItem(props) {

    return (
        <div>
            {props.itemName}, x{props.itemQty}
            <br />
            <img src={props.itemImage} className="checkout-thumbnail" />
            <button>{removeItem()}Remove items</button>
        </div>
    )
}

export default CartItem
