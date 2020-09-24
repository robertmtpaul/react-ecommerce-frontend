import React from 'react'

function CheckoutItem(props) {
    return (
        <div>
            {props.itemName}, x{props.itemQty}
            <br />
            <img src={props.itemImage} />
        </div>
    )
}

export default CheckoutItem
