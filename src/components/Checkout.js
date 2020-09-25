import React from 'react'
import '../Checkout.css'

function Checkout() {
    return (
        <div className="paymentContainer">
            <h5>So happy you're buying from us! Please pop your personal details in below:</h5>
            <form className="paymentform">
                <div className="formGroup">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Address Line 1" />
                    <input type="text" placeholder="Address Line 2" />
                </div>
                <h5>Aaaand your credit card digits:</h5>
                <div className="formGroup">
                    <input type="text" placeholder="account holder" />
                    <input type="text" placeholder="account holder" />
                    <input type="text" placeholder="account holder" />
                </div>

            </form>
        </div>
    )
}

export default Checkout
