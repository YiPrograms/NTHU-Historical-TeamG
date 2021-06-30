import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

import "react-image-gallery/styles/scss/image-gallery.scss";

import "react-image-gallery/styles/css/image-gallery.css";

import ScrollButton from './components/elements/ScrollButton';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollButton />
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
