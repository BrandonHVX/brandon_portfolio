import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './home.css';
import './webdev.css';
import './synergy.css';
import './projects.css';
import './digimedia.css';
import './plyr.css';
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
import Hello from './components/Hello';

const contentStyle = {
    background: "none",
    width: 300,
    
    margin: "auto",
    border: "none", 
    padding: 0,
  };
  

class App extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (        <div>
       
       <div class="head"><Hello name="BG" />
            <Popup
            modal
            overlayStyle={{ background: "rgba(4, 240, 220, 0.93)" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}>
            {close => <Menu close={close} />}
          </Popup>
      </div>
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
