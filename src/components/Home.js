import React, { Component } from 'react';

import scrollToComponent from 'react-scroll-to-component';
import Projects from './Projects.js';
;

class Home extends Component {

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }


  render() {



    return(
      <div class="home">
   
      
   <div class="intro">
  Motivated individual experienced in video production. Interested in videographer/editor
  position with potential for advancement and the ability to utilize and enhance existing skills. 
  Skilled in cross-functional and team collaboration for preparation of interviews, commercials, 
  short films and music videos with the use of interpersonal and customer services skills to enhance 
  client experience. 

  </div>
  


  <div class="center-button">


          <button class="button" onClick={() => scrollToComponent(this.Blue, 
            { offset: 0, align: 'top', duration: 500, ease:'inExpo'})}>View My Work</button>
  
</div>




<div className="project-page"> 

<section className='projects' ref={(section) => { this.Blue = section; }}><Projects /></section></div>
</div>
 
      
    )
  }
}

export default Home;