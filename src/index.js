import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* Add data layer Provider wraps the App in a data layer to manipulate state throughout the app */}
    {/* Here the initial state and the reducer are imported for use by Provider */}
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
