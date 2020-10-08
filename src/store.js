import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers'

const initialState = {};
const reducer = combineReducers({
    //gets a state and an action and returns a new state based on that action
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); 
export default store;