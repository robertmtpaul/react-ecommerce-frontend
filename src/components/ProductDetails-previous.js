import React from "react";
import { Link } from "react-router-dom";
import "../ProductDetails.css";
import axios from "axios";
import {PRODUCTS_URL} from '../constants'

let cartQty = 0;

class ProductDetails extends React.Component {
    state = {
        data: {
            name: "",
            category: "",
            image: "",
            price: "",
            brand: "",
            rating: "",
            numReviews: "",
            description: ""
        },
        qty: 1
    }; // state

    componentDidMount() {
        axios
            .get(`${PRODUCTS_URL}/${this.props.match.params.id}`)
            .then(data => {
                // console.log(data);
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err));
    } // componentDidMount

    addToCart = () => {
        // console.log('button clicked : contents')
        // On button click, adds the item from the product details page and passes the ID passed from the parent component App.js
        this.props.onAddToCart(this.state.data, this.state.qty)
    }

    checkCart() {
        // console.log('check cart!!');
        const productId = this.props.match.params.id
        this.props.cart.forEach(cartProduct => {
            // check productId's value of each obj against current id in state
            console.log("product being compared:", cartProduct);
            if (cartProduct.productId === productId) {
                cartQty += cartProduct.qty;
            }
        });
    }

    cartClick() {
        this.addToCart();
        this.checkCart();
    }

    render() {

        return (
            <div className="details">
                <div className="back">
                    <Link to="/">Back</Link>
                </div>
                <div className="details">
                    <div className="details-image">
                        <img src={this.state.data.image} alt={this.state.data.name} />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{this.state.data.name}</h4>
                            </li>
                            <li>
                                {this.state.data.rating} Stars ({this.state.data.numReviews}{" "}
                Reviews )
              </li>
                            <li>
                                <strong>Price: ${this.state.data.price} </strong>
                            </li>
                            <li>
                                <p>Description:</p>
                                {this.state.data.description}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="details-action">
                    {cartQty > 0 && <div>You have this amount in cart....{cartQty}</div>}
                    <ul>
                        <li>
                            Price: <strong>${this.state.data.price}</strong>
                        </li>
                        <li>Status: {this.state.data.status}</li>
                        <li>
                            {/* when button clicked, uses event to save quantity into state */}
              Qty:{" "}
                            <select
                                onChange={e => this.setState({ qty: parseInt(e.target.value) })}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li>
                        <li>
                            {/* gives name of the function to run later on time of click */}
                            <button className="button" onClick={() => this.cartClick()}>
                                Add to cart
              </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
} // ProductDetails class

export default ProductDetails;
