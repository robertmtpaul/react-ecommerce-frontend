import React, { useState, useEffect } from 'react';

export function ProductDetails(props) {
    const [data, setData] = useState({
        name: "",
        category: "",
        image: "",
        price: "",
        brand: "",
        rating: "",
        numReviews: "",
        description: ""
    });

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios
            .get(`${PRODUCTS_URL}/${props.match.params.id}`)
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
    }, [props.match]);

    function addToCart() {
        props.onAddToCart(this.state.data, this.state.qty);
    }

    function checkCart() {
        const productId = props.match.params.id;
        props.cart.forEach(cartProduct => {
            if (cartProduct.productId === productId) {
                cartQty += cartProduct.qty;
            }
        });
    }

    function cartClick() {
        addToCart();
        checkCart();
    }
}