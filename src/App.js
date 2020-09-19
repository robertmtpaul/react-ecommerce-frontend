import React from 'react';
import './App.css';
import data from './data'
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

function App() {

  // Open the sidebar with categories with vanillaJS DOM manip.
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  // close the sidebar with categories.
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (

    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
              </button>
            <Link to="/">E-commerce store</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in </a>
          </div>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Electronics</a>
              </li>
              <li>
                <a href="index.html">Clothes</a>
              </li>
            </ul>
          </aside>

        </header>
      
        <main className="main">
          <div className="content">
              {/* <Route path="/" component={ Sidebar } /> */}
              <Route exact path="/product/:id" component={ProductDetails} />
              <Route exact path="/" component={ Home } />


          </div>
        </main>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
    </Router>

  );
}

export default App;
