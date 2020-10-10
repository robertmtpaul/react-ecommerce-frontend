import React from 'react';
import './App.css';
import './Footer.css';
import { Route, HashRouter as Router } from 'react-router-dom';

// import website components
import ProductIndex from './components/ProductIndex'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import axios from 'axios'

class App extends React.Component {
  state = {
    user: {},
    cart: [],
    cartCount: 0,
  }

  // PREVIOUS CODE:
  // import Cart from './components/Cart'
  // addToCart = (product, qty) => {
  //   // console.log('in add to cart: ', product, qty )

  //   // Set a variable that keeps an updated version of the cart i.e. 
  //   ///'...'retains what is already in cart
  //   const newCart = [ ...this.state.cart, {product, qty } ];
  //   // console.log('quantities' , this.state.cartCount, qty)
  //   // Put what is in the cart in state. 
  //   this.setState({ cart: newCart, cartCount: this.state.cartCount + qty })
  //   localStorage.setItem('cart', JSON.stringify(newCart))
  // }

  // removeItem = (removeId) => {// Here the Id of the item to be removed is passed in     
  //       console.log(removeId);
  //   // Here we make a copy of the cart's current state
  //       const cartCopy = [...this.state.cart];
  //   // Loop through the cart's current state, passing in the product to be deleted and the index of the item 
  //       this.state.cart.forEach( (cartProduct, index) => {
  //           console.log('product ebeing compared', cartProduct);
  //   // We compare the IDs of the cart products array and check for a match of the product ID being passed in
  //           if (cartProduct.product._id === removeId) {
  //               console.log('removed', cartProduct);
  //   // We then use splice to first get the index of that product in the cart array and delete it from the caopy of the cart
  //               cartCopy.splice(index, 1);
  //           }
  //       });
  //   // And now the updated version of the copy we made of the cart is put into state
  //       this.setState({cart: cartCopy})
  //   }


  componentDidMount() {
    // Check if local storage token and user is set
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    // And if not null, set token into the axios header
    // which will cause axios headers to be authenticated
    // set user object into state.
    if (token !== null && user !== null) {
      this.setState({ user: JSON.parse(user) });
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    // Load shopping cart from local storage if available
    // if not null, assume ... (?)
    const cart = localStorage.getItem('cart')
    if (cart !== null) {
      // JSON.parse gets the string back and turns into array of objects/
      this.setState({ cart: JSON.parse(cart) })
    }
  }

  // passes as arguments token and user that backend sent
  performLogin = (token, user) => {
    console.log('app.performLogin', token, user)
    // setting the axios header with the token sent by the backend
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // store the current user into state as an object.
    this.setState({ user })
    // save the token into local storage for use by App.js and other components on site.
    localStorage.setItem('token', token)
    // local storage can only set strings, can't set complex items, so needs to have the JSON stringified.
    localStorage.setItem('user', JSON.stringify(user))
  }

  performLogout = (event) => {
    event.preventDefault()
    delete axios.defaults.headers.common.Authorization

    // Remove the cart & users props stored in local storage.
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    // set the user state as empty object
    this.setState({ user: {} })
  }

  render() {
    return (

      <Router>
        <div>
          <Route path="/" render={(props) => <Header {...props} onLogout={this.performLogout} currentUser={this.state.user} cartCount={this.state.cartCount} />} />
          {/*        
            Pass in ROUTER PROPS into the 
          */}
          <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.performLogin} />} />
          <main className="main">
            <div>

              <br />
            </div>
            <div className="content">
              <Route exact path="/" component={ProductIndex} />
              <Route exact path="/products/:id" component={ProductDetails} />
              <Route exact path="/checkout" />
              <Route path="/cart" >
                <Cart />
              </Route>
            </div>
          </main>
          <footer className="footer">
            Final project at General Assembly - by Robert Paul - rob@glo.id.au
          </footer>
        </div>
      </Router>

    );
  }
}
export default App;
