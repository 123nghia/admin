import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// require('dotenv').config();
global.BASE_URL = process.env.REACT_APP_API;
// global.SCAN = process.env.REACT_APP_SCAN;
// global.RPC = process.env.REACT_APP_RPC;
// global.ENV = process.env.REACT_APP_ENV;
// global.COMMUNITY = process.env.REACT_APP_COMMUNITY;
ReactDOM.render(<App />, document.getElementById('root'));
