import React , {Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './home.css';
import './webdev.css';
import './synergy.css';
import './projects.css';
import './digimedia.css';
import './plyr.css';
import './index.scss';
import './styles.css';
import './slider-animations.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
