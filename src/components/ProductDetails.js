import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_URL } from "../constants";
import { useStateValue } from "../StateProvider";
import "../ProductDetails.css";


let cartQty = 0;

export default function ProductDetailsFunctional(props) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    brand: "",
    rating: "",
    quantity: "",
    numReviews: "",
    description: "",
  });
  const [{ cart }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = () => {
    // use axios to retrieve product with the matching ID passed in by props and store as variable 'data'
    Axios.get(`${PRODUCTS_URL}/${props.match.params.id}`)
      // Set the product retrieved by Axios request into state using setProduct.
      .then((response) => {
        console.log("matched product", response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }; // fetchProduct

  useEffect(() => {
    fetchProduct();
    console.log("Product component mounted!");
    // create function that runs and grabs data from API
  }, [props.match]);

  // function checkCart() {
  //   const productId = props.match.params.id;
  //   props.cart.forEach((cartProduct) => {
  //     if (cartProduct.productId === productId) {
  //       cartQty += cartProduct.qty;
  //     }
  //   });
  // }

  const addToCart = () => {
    // Add item selected to cart...
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

  function cartClick() {
    addToCart();
    // checkCart();
  }

  return (
    <div className="details">
      <Link className="back" to="/">
        Back
      </Link>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
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
              {product.description}
            </li>
          </ul>
        </div>
      </div>
      <div className="details-action">
        {/* {cartQty > 0 && <div>You have this amount in cart....{cartQty}</div>} */}
        <ul>
          <li>
            Price: <strong>${product.price}</strong>
          </li>
          <li>Stock levels: {
            product.quantity > 20 ? (
              <p>High</p>
            ) : (
              <p>Low</p>
            )
            }

          </li>
          <li>
            <select
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </li>
          <li>
            <button className="button" onClick={cartClick}>
              Add to cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
