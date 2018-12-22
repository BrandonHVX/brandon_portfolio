import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from "reactjs-popup";
import Hello from './components/Hello';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Home from './components/Home';
import Landing from './components/Landing';
import BurgerIcon from './components/BurgerIcon';
import scrollToComponent from 'react-scroll-to-component';
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const contentStyle = {
  background: "none",
  border: "none"
};


class App extends Component {
  componentDidMount() {
    scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }
 
 render() {
   return (
    
    <div>
      
      
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

          <section className='violet' ref={(section) => { this.Violet = section; }}>  
              
          </section>
        
        
    </div>
   )


}
}

 

export default App;
