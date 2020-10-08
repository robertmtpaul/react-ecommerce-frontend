// initialise React and hooks methods i.e. useState, useEffect
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'

function ProductIndex(props) {
  const productList = useSelector(state => state.productList);
  // import products,loading , error from the productList in ... 
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {
      // 
    };
  }, [])

  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [])


  return loading? <div>Loading...</div>: 
  error? <div>{error}</div> :
  
  <ul className="products">
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
            <button>Add to cart</button>
          </div>
        </li>)
    }
  </ul>

}

export default ProductIndex;