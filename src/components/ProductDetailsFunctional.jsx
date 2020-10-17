import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_URL } from "../constants";
import { useStateValue } from "../StateProvider";

export default function ProductDetailsFunctional(props) {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    brand: "",
    rating: "",
    numReviews: "",
    description: "",
  });
  const [{ cart }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    Axios
      .get(`${PRODUCTS_URL}/${props.match.params.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.match]);

  // function addToCart() {
  //   props.onAddToCart(this.state.data, this.state.qty);
  // }

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
      type: 'ADD_TO_CART',
      item: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantity: data.quantity,
        rating: data.rating
      }
    })
  };

  function cartClick() {
    addToCart();
    // checkCart();
  }

  console.log('@@@@@@', data);

  return (
    <div className="details">
      <Link className="back" to="/">
        Back
      </Link>
      <div className="details">
        <div className="details-image">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{data.name}</h4>
            </li>
            <li>
              {data.rating} Stars ({data.numReviews} Reviews )
            </li>
            <li>
              <strong>Price: ${data.price} </strong>
            </li>
            <li>
              <p>Description:</p>
              {data.description}
            </li>
          </ul>
        </div>
      </div>
      <div className="details-action">
        {/* {cartQty > 0 && <div>You have this amount in cart....{cartQty}</div>} */}
        <ul>
          <li>
            Price: <strong>${data.price}</strong>
          </li>
          <li>Status: {data.status}</li>
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
