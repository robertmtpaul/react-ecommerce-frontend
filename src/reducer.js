// We export this as we want to use it outside of this reducer.js file.
export const initialState = {
    cart: []
};

export const calculateGrandTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

// Create reducer that manipulates the data layer with actions (the 'action' argument)
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {   // CHECK against a number of strings i.e. case
        case 'ADD_TO_CART':
            // HERE: Logic statements for adding item to cart.
            // It will do a bunch of stuff, then it will break.
            return {
                ...state,
                cart: [...state.cart, action.item], // returning the current state of the cart, plus the new item.
            }; // here we need to return the state, and this breaks things, so no need for 'break'
        case 'REMOVE_FROM_CART':
            // Logic for Removing item from cart.  It will do a bunch of stuff, then break.

            // 1. CLONE CART
            let newCart = [...state.cart];

            // 2. CHECK TO SEE IF ITEM EXISTS IN CART stored in state.
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            // 3. IF ITEM EXISTS, cut it out.
            if (index >= 0) {
                newCart.splice(index, 1); // splice : go and get the item at index found, and cut it out.
            } else {
                console.warn(
                    `Could not remove product (id: ${action.id}) as ID was not found.`
                );
            }
            return {
                // set state to whatever state previously was
                ...state,
                cart: newCart
            }; // cart should be the newCart.
        default:
            //provide a default action to happen, and in this case just do nothing
            return state;
    }

}

export default reducer; // this allows us to use the reducer outside this component.
