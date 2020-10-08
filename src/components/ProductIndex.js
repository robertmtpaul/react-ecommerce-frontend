// initialise React and hooks methods i.e. useState, useEffect
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useStateValue } from "../StateProvider";


function ProductIndex(props) {
  const [products, setProduct] = useState([]);  // put the product and setProduct into useState
  const [{}, dispatch] = useStateValue(); // getting cart, and the dispatch. 

  const PRODUCTS_BASE_URL = "http://localhost:1337/products"

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(PRODUCTS_BASE_URL)     // Set the data retrieved via axios request into state in setProduct

      setProduct(data);
    }
    fetchProducts();
    return () => {
      // cleanup
    }
  }, [])

  const addToCart = (props) => { 
    // Add item to cart...
    dispatch({
      type: 'ADD_TO_CART',
      item: { // passing a payload.
        id: props._id, 
        name: props.name,
        image: props.image,
        price: props.price,
        rating: props.rating
      }
    })
  };

  return <ul className="products">
    {
      // Map through products in state, 
      products.map(product =>
        //set key to something unique like productID to satisfy map function
        <li key={product._id}>
          <div className="product">
            <Link to={`${/products/}${product._id}`}>
              <img className="product-image" src={product.image} alt={product.name} />
            </Link>
            <div className="product-name">
              <Link to={`${/products/}${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars({product.numReviews} Reviews)</div>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        </li>)
    }
  </ul>

}

export default ProductIndex;