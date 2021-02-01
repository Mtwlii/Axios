import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//!========My library ==============
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'popper.js/dist/umd/popper';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createStore } from 'redux';
import { Provider } from "react-redux";
//!===============================
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}><React.StrictMode> <App /></React.StrictMode></Provider >, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
