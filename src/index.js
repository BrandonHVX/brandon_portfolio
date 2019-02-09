import React , {Component}from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/navi.css';
import './css/landing.css';
import './css/webdev.css';
import './css/design.css';
import './css/slider.css';
import './css/resume.css';
// import './css/digitalmedia.css';
import './css/webdev.scss';
import './css/normalize.css';
import './css/skeleton.css';
import './css/lightbox.css';



import * as serviceWorker from './serviceWorker';
import App from './App';





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
