import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import scrollToComponent from 'react-scroll-to-component';
import Projects from './Projects.js';
import Home from './Home.js';
import Popup from "reactjs-popup";
import BurgerIcon from './BurgerIcon.js';
import SkillsIcon from './SkillsIcon.js';
import Menu from './Menu';
import { Link } from "react-router-dom";

const contentStyle = {
  background: "none",
  border: "none"
};

class Landing extends Component {

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }



  render() {

    return(
      <div class="landing-page">



     <div class="landing"><Fade>
     <h4>BRANDON GINES</h4>
   Motivated individual experienced in video production. Interested in videographer/editor
      position with potential for advancement and the ability to utilize and enhance existing skills. 
      Skilled in cross-functional and team collaboration for preparation of interviews, commercials, 
      short films and music videos with the use of interpersonal and customer services skills to enhance 
       client experience. </Fade>
    </div>
      <div class="center-button">
      <button class="button"> <Fade left><Link to="/projects">Next1</Link></Fade>
    </button></div>
      

         
          
         
          
          

          
      </div>
    )
  }
}

export default Landing;