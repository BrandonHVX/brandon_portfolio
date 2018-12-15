import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import scrollToComponent from 'react-scroll-to-component';
import Projects from './Projects.js';
import Home from './Home.js';
;

class Landing extends Component {

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }



  render() {

    return(
      <div>
      <div class="intro">
      Motivated individual experienced in video production. Interested in videographer/editor
      position with potential for advancement and the ability to utilize and enhance existing skills. 
      Skilled in cross-functional and team collaboration for preparation of interviews, commercials, 
      short films and music videos with the use of interpersonal and customer services skills to enhance 
       client experience. 
    </div>
      <div class="center-button">
      <button class="button"  onClick={() => scrollToComponent(this.Blue, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>View My Work</button>
      
    </div>

          <section className='indigo' ref={(section) => { this.Blue = section; }}></section>
          <section className='blue' ref={(section) => { this.Blue = section; }}> <Fade right><Projects /></Fade></section>
      </div>
    )
  }
}

export default Landing;