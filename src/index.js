import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'
import { createStore, applyMiddleware ,compose } from 'redux';
import rootReducers from "./../src/redux/reducers";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import root from "./../src/redux/sagas"
import './assets/css/sidebar.css';
import './all.css';



const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, thunk]

const storeS = createStore(rootReducers,
  applyMiddleware(...middleWares)
  
  )

React.icons = icons

sagaMiddleware.run(root)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
