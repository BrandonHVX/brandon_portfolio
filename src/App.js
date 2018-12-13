import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from "reactjs-popup";
import Hello from './components/Hello';
import Menu from './components/Menu';
import Home from './components/Home';
import BurgerIcon from './components/BurgerIcon';
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const contentStyle = {
  background: "none",
  border: "none"
};


class App extends Component {

 
 render() {
   return (
    <div class="head">
      <Hello name="BRANDON GINES" />
      <Popup
        modal
        overlayStyle={{ background: "rgba(4, 240, 220, 0.93)" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
      
      <Home />
    </div>
   )


}
}

 

export default App;
