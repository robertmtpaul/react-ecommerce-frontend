import React from 'react';
import './App.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

// import website components
import Home from './components/Home'
import Header from './Header'
import ProductDetails from './components/ProductDetails'

function App() {

  // TODO : implement with fixed sidebar.
  // Open the sidebar with categories with vanillaJS DOM manip.
  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // }

  // // close the sidebar with categories.
  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classList.remove("open")
  // }

  return (

    <Router>
      <div className="grid-container">
        <Route path="/" component={Header} />
        <main className="main">
          <div className="content">
            {/* TODO: SIDEBAR COMPONENT */}
            {/* <Route path="/" component={ Sidebar } /> */}

            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/" component={Home} />
          </div>
        </main>
        <footer className="footer">
          Final project at General Assembly - by Robert Paul - rob@glo.id.au
        </footer>
      </div>
    </Router>

  );
}

export default App;
