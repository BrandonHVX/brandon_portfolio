import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './home.css';
import './webdev.css';
import './synergy.css';
import './projects.css';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Salon from './components/Salon.js';
import Landing from './components/Landing.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Popup from "reactjs-popup";
import BurgerIcon from './components/BurgerIcon';
import Menu from './components/Menu';
import Fade from '@material-ui/core/Fade';
import SkillsIcon from './components/SkillsIcon.js';

const contentStyle = {
    background: "none",
    border: "none"
  };
  

class App extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (        <div>
       

        <BrowserRouter>
         
          <div>
            <Route path="/" exact component={Landing} />
            <Route path="/projects" component={Home} />
           
          </div>
        </BrowserRouter></div>
      );
    }
  }




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
