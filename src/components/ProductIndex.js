// initialise React and hooks methods i.e. useState, useEffect
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateValue } from "../StateProvider";
import { Link } from 'react-router-dom'
import { PRODUCTS_URL } from '../constants'
import '../Products.css'

function ProductIndex(props) {
  // put the product and setProduct into useState
  const [products, setProducts] = useState([]);
  // getting cart, and the dispatch. 
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchProducts = async () => {
      // use axios to retrieve products from backend API and store as variable 'data'
      const { data } = await axios.get(PRODUCTS_URL)
      // Set the data retrieved via axios request into state in setProduct
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
    return () => {
      // cleanup
    }
  }, [])

  const addToCart = (product) => {
    // Add item to cart...
    const payload = {
      type: 'ADD_TO_CART',
      product: { // passing a payload.
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: product.quantity,
        rating: product.rating
      }
    };
    // console.log(payload);
    // dispatch()
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
        rating: product.rating
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
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </li>)
    }
  </ul>

}

export default ProductIndex;