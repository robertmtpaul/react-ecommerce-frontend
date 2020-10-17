import React from 'react';
import './App.css';
import './Footer.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import axios from 'axios'

// import website components
import ProductIndex from './components/ProductIndex'
import Header from './components/Header'
import Cart from './components/Cart'
import Login from './components/Login'
import Payment from './components/Payment'
import ProductDetails from './components/ProductDetails'
import ProductDetailsFunctional from './components/ProductDetailsFunctional';

// import { auth } from './firebase'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from "@stripe/stripe-js";

// const promise = loadStripe
//   ('pk_test_51HUoMRErAewt7RL6NDXnnMAB1Qzx8LEq7baSaXT5fy11YQmsl8A2c2m4mzzeW5O3R4Nynlsdh5srVKDyNkNQ6vZZ00pyGr4vsZ');

class App extends React.Component {
  state = {
    user: {},
    cart: [],
    cartCount: 0,
  }

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
    console.log('user is', user)
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
          {/*        
            Pass in ROUTER PROPS into the header component. 
          */}
          <Route path="/" render={(props) => <Header {...props} onLogout={this.performLogout} currentUser={this.state.user} />} />
          <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.performLogin} />} />
          <main className="main">
            <div>

              <br />
            </div>
            <div className="content">
              <Route exact path="/" component={ProductIndex} />
              <Route exact path="/products/:id" component={ProductDetailsFunctional} />
              <Route path="/cart" >
                <Cart />
              </Route>
              <Route exact path="/payment" component={Payment} />

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
