import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom'

function ProductDetails (props) {
    // Debugging: See what the ID of the current item is
    console.log(props.match.params.id)
    const product = data.products.find(item => item._id === props.match.params.id)
    return <div className="details">
            <div>
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
                            <strong>${product.price} </strong>
                        </li>
                        <li>
                            <p>Description:</p>
                            { product.description }
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    
}

export default ProductDetails;