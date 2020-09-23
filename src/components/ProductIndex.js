// initialise React and hooks methods i.e. useState, useEffect
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function ProductIndex (props) {
    // put the product and setProduct into useState
    const [ products, setProduct ] = useState ([]);

    const PRODUCTS_BASE_URL = "http://localhost:1337/products"

    // const HEROKU_PRODUCTS_BASE_URL = "https://node-ecommerce-backend.herokuapp.com/products"
    
    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get(PRODUCTS_BASE_URL)
        setProduct(data);
      }
      fetchProducts(); 
      return () => {
        // cleanup
      }
    }, [])

    return <ul className="products">
    {
      // 
      
      products.map(product =>
        //set key to something unique like productID to satisfy map function
        <li key = { product._id }>
          <div className="product">
            <Link to={`${/product/}${product._id}`}>
              <img className="product-image" src={product.image} alt={product.name} />
            </Link>
            <div className="product-name">
              <Link to={`${/product/}${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars({product.numReviews} Reviews)</div>
          </div>
        </li>)
    }
  </ul>
    
}

export default ProductIndex;