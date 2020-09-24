// We export this as we want to use it outside of this reducer.js file.
export const initialState = {
    cart: [],
};

// Create a reducer that manipulates the data layer with actions (the 'action' argument)
function reducer(state, action) {
    // check against a number of strings i.e. case
    switch(action.type){
        case 'ADD_TO_CART':
            // Logic statements for adding item to cart
            break;
        case 'REMOVE_FROM_CART':
            //Logic for Removing item from cart
            break;
        default: 
            //provide a default action to happen, and in this case just do nothing
            return state;
    }

}

export default reducer;