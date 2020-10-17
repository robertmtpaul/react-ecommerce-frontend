// initialise React and hooks methods i.e. useState, useEffect
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { PRODUCTS_URL } from "../constants";
import "../ProductIndex.css";

function ProductIndex() {
  // put the product and setProduct into useState
  const [products, setProducts] = useState([]);
  // getting cart, and the dispatch.
  const [{ cart }, dispatch] = useStateValue();

  // Create function for retrieving product information from Node.js backend.
  const fetchProducts = () => {
    // use axios to retrieve products from backend API and store as variable 'data'
    Axios.get(PRODUCTS_URL)
      .then((response) => {
        console.log("Sent request for products data to backend", response.data);
        // Store the products retrieved by Axios request into state using setProducts
        setProducts(response.data);
      })
      // throw
      .catch((err) => console.log(err));
  }; // fetchProducts

  useEffect(() => {
    fetchProducts();
    console.log("Products mounted!");
  }, []);

  const addToCart = (product) => {
    // Add item to cart...
    dispatch({
      type: "ADD_TO_CART",
      item: {
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
        rating: product.rating,
      },
    });
  };

  return (
    <div>
      <ul className="products">
        {
          // Map through products in state,
          products.map((product) => (
            //set key to something unique like productID to satisfy map function
            <li key={product._id}>
              <div className="product">
                <Link to={`${/products/}${product._id}`}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="product-name">
                  <Link to={`${/products/}${product._id}`}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  {product.rating} Stars({product.numReviews} Reviews)
                </div>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProductIndex;
