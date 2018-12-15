import React, {Component } from 'react';
import Projects from './Projects.js';
import NavBar from './NavBar.js';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-addons-transition-group';

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class Box extends React.Component {
    componentWillEnter (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }
  
    componentWillLeave (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
    }
  
    render () {
      return <div className="box" ref={c => this.container = c}/>;
      
    }
  }
  

class Home extends Component{

  state = {
    shouldShowBox: true
  };

  toggleBox = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox
    });
  };

  render () {
    return <div className="page">

        <TransitionGroup>
        { this.state.shouldShowBox && <Box />}
        </TransitionGroup>

    
      <button
        className="toggle-btn"
        onClick={this.toggleBox}
      >
        toggle
      </button>
    </div>;
  }
}


export default Home;