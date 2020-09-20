import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom'
import ".ProductDetails.css"

function ProductDetails (props) {
    // Debugging: See what the ID of the current item is
    console.log(props.match.params.id)
    // print out the details of the 
    const product = data.products.find(item => item._id === props.match.params.id)
    return <div className="details">
            <div className="back">
                <Link to="/">Back</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews )
                        </li>
                        <li>
                            <strong>Price: ${product.price} </strong>
                        </li>
                        <li>
                            <p>Description:</p>
                            { product.description }
                        </li>
                    </ul>
                </div>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: <strong>${product.price}</strong>
                    </li>
                    <li>
                        Status: {product.status}
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

    
}

export default ProductDetails;