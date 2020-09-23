import React from "react"


class Checkout extends Component {

    render() {
        return (
            <div>
                Here's what you have in your cart right now:
                <div>
                    {
                        this.props.cart.map(c => <p>{c.productId}: {c.qty}</p>)
                    }
                </div>



            </div>
        )
    }


}

export default Checkout