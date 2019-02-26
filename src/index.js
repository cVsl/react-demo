import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.scss';
// import App from './App.js';
import * as serviceWorker from './serviceWorker';
import Router from './router'
import { Provider } from 'react-redux'
import './utils/rem'
import './assets/font/iconfont.css'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
