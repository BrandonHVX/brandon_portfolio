import React, {Component } from 'react';
import Projects from './Projects.js';
import Navi from './Navi.js';
import NavBar from './NavBar.js';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Menu from './Menu';
import Popup from "reactjs-popup";
import SkillsIcon from './SkillsIcon.js';



class Home extends Component{



  render() {
    return(
      <div>
        
        
      <NavBar />
   
    </div>
    )
  }
}


export default Home;