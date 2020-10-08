import axios from "axios";
const { PRODUCTS_URL } = require("../constants/constants")
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/productConstants")


const listProducts = () => async (dispatch ) => {
    // function is async, 
    try {
        dispatch ({type: PRODUCT_LIST_REQUEST}) // request list of products.
        // after request, make ajax request for 
        const {data} = await axios.get(PRODUCTS_URL);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })// when I get the data from server, return the data 
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

    }

}
export { listProducts}