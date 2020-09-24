import React from 'react';
import './App.css';
import './Footer.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

// import website components
import ProductIndex from './components/ProductIndex'
import Header from './components/Header'
import Checkout from './components/Checkout'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import axios from 'axios'

class App extends React.Component {
  state = {
    user: {},
    cart: [],
    cartCount: 0,
  }
  
  addToCart = (product, qty) => {
    console.log('in add to cart: ', product, qty )
    // put what is in the cart in state
    // '...'retains what already in cart
    //set a variable that keeps an updated version of the cart i.e. 
    const newCart = [ ...this.state.cart, {product, qty } ];
    console.log('quantities' , this.state.cartCount, qty)
    // 
    this.setState({ cart: newCart, cartCount: this.state.cartCount + qty })
    localStorage.setItem('cart', JSON.stringify(newCart))
  }


  componentDidMount() {
    // Check if local storage token and user is set
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    console.log(token)
    //  and if not null, set token into the axios header
    // whcih will cause axios headers to be authenticated
    // set user object into state.
    if( token !== null && user !== null) {
      this.setState({ user: JSON.parse(user)} );
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    // Load shopping cart from local storage if available
    // if not null, assume ... (?)
    const cart = localStorage.getItem( 'cart')
    if (cart !== null) {
      // JSON.parse gets the string back and turns into array of objects/
      this.setState({cart: JSON.parse(cart)})
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
    localStorage.setItem( 'token', token)
    // local storage can only set strings, can't set complex items, so needs to have the JSON stringified.
    localStorage.setItem( 'user', JSON.stringify(user) )
  }

  // cart calculator
  // always give total number of items 
  // loop to add all cart quantities.

    performLogout = ( event )=> {
      event.preventDefault()
      delete axios.defaults.headers.common.Authorization
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      // set the user state as empty object
      this.setState({ user: {} })
    } 
    //localStorage.removeItem("jwt")
    // this.setState = {}

  render() {
    return (
      
      <Router>
        <div className="grid-container">
          <Route path="/" render={(props) => <Header {...props} onLogout={this.performLogout} currentUser={this.state.user} cartCount={this.state.cartCount}/>  } />
          <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.performLogin} />  } />
          <main className="main">
          <div>
           
            <br/> 
          </div>
            <div className="content">
              <Route exact path="/" component={ProductIndex} />
              
              <Route exact path="/products/:id" render={(props) => 
                <ProductDetails 
                {...props} 
                onAddToCart={this.addToCart} 
                cart={this.state.cart}
                />  
              } 
              />
          <Route exact path="/checkout" render={(props) => <Checkout {...props} cart={this.state.cart} />  }  /> 
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
