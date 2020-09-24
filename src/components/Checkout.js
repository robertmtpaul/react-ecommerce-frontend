import React from "react"
import CheckoutItem from './CheckoutItem'

class Checkout extends React.Component {

    // TODO: cartUpdate function?
    // TODO : add clear cart button
    // TODO : add remove item from cart

    // /cart separate 
    // /cart react route: 

    calculateGrandTotal() {
        let grandTotal = 0
        this.props.cart.forEach(cartItem => {
            grandTotal += cartItem.product.price * cartItem.qty
        });
        return grandTotal.toFixed(2)
        // grand total this.grandTotal
    }

    render() {
        return (
            <div>
                <h5>Here's a detailed breakdown of your cart:</h5>
                <div>
                    {
                        this.props.cart.map(c =>
                            <CheckoutItem
                                itemName={c.product.name}
                                itemQty={c.qty}
                                itemImage={c.product.image}
                            />
                        )
                    }
                    Grandtotal: ${this.calculateGrandTotal()}
                </div>
            </div>
        )
    }


}

export default Checkout