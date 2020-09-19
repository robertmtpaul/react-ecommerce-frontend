import React from 'react';
import './App.css';
import data from './data'
import { Route, Link, HashRouter as Router } from 'react-router-dom';

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
            <a href="index.html">Home</a>
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
        <aside>
          Shopping Categories
        </aside>
        <main className="main">
          <div className="content">
            <ul className="products">
              {
                data.products.map(product =>
                  <li>
                    <div className="product">
                      <img className="product-image" src={product.image} alt={product.name} />
                      <div className="product-name">
                        <a href="product.html">{product.name}</a>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">{product.rating} Stars({product.numReviews} Reviews)</div>
                    </div>
                  </li>)
              }
            </ul>
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
