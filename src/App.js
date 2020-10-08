import React from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import './App.css';
import './Footer.css';

// import website components
import ProductIndex from './components/ProductIndex'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'
import Login from './components/Login'
import axios from 'axios'

class App extends React.Component {
  state = {
    user: {},
    cart: [],
  }
  
  componentDidMount() {
    // TODO1   : check if local storage token and user is set
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
    // 
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
          <Route path="/" render={(props) => <Header {...props} onLogout={this.performLogout} currentUser={this.state.user} />  } />
          <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.performLogin} />  } />
          <main className="main">
          <div>
            {/* TODO1: move shopping cart to the navbar/right hand side */}
            {/* TODO2: Use product name instead of ID */}
            Shopping cart
            {
              this.state.cart.map(c => <p>{c.productId}: {c.qty}, {c.price}</p>)
            }
            {/* TODO: use CSS to create break. */}
            <br/> 
            <Link to="/checkout">Checkout</Link>

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
              <Route path="/checkout" component ={Checkout}>
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
