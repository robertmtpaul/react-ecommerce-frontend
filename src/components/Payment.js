import React from 'react'
import { Link } from 'react-router-dom';
import '../Payment.css'
import CartItem from './CartItem';
import { useStateValue } from '../StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment(props) {
    const [{ cart }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    // const [error, setError] = useState(null);
    // const [disabled, setDisabled] = useState(true);

    const handleSubmit = event => {
        // stripe API requests
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/cart">{cart?.length} items</Link>
                    )
                </h1>
                {/* Payment - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{props.currentUser.name} ({props.currentUser.email})</p>
                        <p>{props.currentUser.address}</p>
                        <p>Sydney, Australia</p>
                    </div>
                </div>

                {/* Payment - Review your items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    {cart.map(product => (
                        <CartItem
                            name={product.name}
                            id={product.id}
                            qty={product.quantity}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                </div>

                {/* Payment - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
