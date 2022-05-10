import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/all.css";
import "./all.css";

import { icons } from "./assets/icons";

import { Provider } from "react-redux";
// import store from './store'
import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import "antd/dist/antd.css";
import "./assets/css/sidebar.css";

import myReducer from "./reducers/reducers";
import "./assets/css/root.css";
import "./assets/css/all.css";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(myReducer, applyMiddleware(thunk));

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
