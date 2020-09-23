import React from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import "../ProductDetails.css"
import axios from 'axios';

const PRODUCTS_BASE_URL = "http://localhost:1337/products"

// const HEROKU_PRODUCTS_BASE_URL = "https://node-ecommerce-backend.herokuapp.com/products"


class ProductDetails extends React.Component {
    state = {
        data: {
            name: '',
            category: '',
            image: '',
            price: '',
            brand: '',
            rating: '',
            numReviews: '',
            description: '',
        },
        qty: 1
    }; // state

    componentDidMount() {
        axios.get(`${PRODUCTS_BASE_URL}/${this.props.match.params.id}`)
            .then(data => {
                console.log(data);
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err));

    } // componentDidMount

    addToCart = () =>  {
        console.log('button clicked : contents')
        this.props.onAddToCart(this.props.match.params.id, this.state.qty)
    }

    render() {
        // TODO: save
        const productId = this.props.match.params.id
        let cartQty = 0;
        
        let checkCart = () => {
        // loop through every item in cart
        this.props.cart.forEach(cartProduct => {
            // check productId's value of each obj against current id in state
            console.log('product being compared:' , cartProduct);
            if( cartProduct === productId ){
                cartQty += cartProduct.qty
            }
        });
        }
        // if match, add OBJ qty to total qty

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
                                {this.state.data.rating} Stars ({this.state.data.numReviews} Reviews )
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
                    {
                        cartQty > 0 
                        && 
                        (
                            <div>You have this amount in cart....{cartQty}</div>
                        )
                    }
                    <ul>
                        <li>
                            Price: <strong>${this.state.data.price}</strong>
                        </li>
                        <li>
                            Status: {this.state.data.status}
                        </li>
                        <li>
                            {/* when button clicked, uses event to save quantity into state */}
                            Qty: <select onChange={ (e) => this.setState({ qty: parseInt(e.target.value) }) 
                        } >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li>
                        <li>
                            {/* gives name of the function to run later on time of click */}
                            <button className="button" onClick= {this.addToCart}>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>


        )

    }

} // ProductDetails class


export default ProductDetails;
