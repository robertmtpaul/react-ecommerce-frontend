import React from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import "../ProductDetails.css"
import axios from 'axios';

const PRODUCTS_BASE_URL = "http://localhost:1337/products"


// TODO: refactor as function and use Hooks
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
        },
    }; // state

    componentDidMount() {
        axios
            .get(
                `${PRODUCTS_BASE_URL}/${this.props.match.params.id
                }.json`
            )
            .then(data => {
                console.log(data);
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err));

    } // componentDidMount

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
                                {this.state.data.rating} Stars ({this.state.data.numReviews} Reviews )
                        </li>
                            <li>
                                <strong>Price: ${this.state.data.price} </strong>
                            </li>
                            <li>
                                <p>Description:</p>
                                {this.state.data.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: <strong>${this.state.data.price}</strong>
                        </li>
                        <li>
                            Status: {this.state.data.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>


        )

    }

} // ProductDetails class


 
// function ProductDetails (props) {
//     // Debugging: See what the ID of the current item is
//     console.log(props.match.params.id)
//     // print out the details of the 


//     const product = data.products.find(item => item._id === props.match.params.id)
//     return <div className="details">
//             <div className="back">
//                 <Link to="/">Back</Link>
//             </div>
//             <div className="details">
//                 <div className="details-image">
//                     <img src={product.image} alt={product.name}/>
//                 </div>
//                 <div className="details-info">
//                     <ul>
//                         <li>
//                             <h4>{product.name}</h4>
//                         </li>
//                         <li>
//                             {product.rating} Stars ({product.numReviews} Reviews )
//                         </li>
//                         <li>
//                             <strong>Price: ${product.price} </strong>
//                         </li>
//                         <li>
//                             <p>Description:</p>
//                             { product.description }
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="details-action">
//                 <ul>
//                     <li>
//                         Price: <strong>${product.price}</strong>
//                     </li>
//                     <li>
//                         Status: {product.status}
//                     </li>
//                     <li>
//                         Qty: <select>
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                         </select>
//                     </li>
//                     <li>
//                         <button className="button">Add to cart</button>
//                     </li>
//                 </ul>
//             </div>
//         </div>


// } //Product details FUNCTION

export default ProductDetails;
