import React, { Component } from 'react';
import Salon from './Salon.js';
import Projects from './Projects.js';
import Fade from 'react-reveal/Fade';


class NavBar extends Component {



  render() {

    return(
        
      <div id="navi">
   <div class="ct" id="t1">
  <div class="ct" id="t2" >
    <div class="ct" id="t3">
      <div class="ct" id="t4">
         <div class="ct" id="t5">
         <Fade right><ul id="menu">

            <a href="#t1"><li class="icon fa fa-bolt" id="uno"></li>WEB DEV</a>
            <a href="#t2"><li class="icon fa fa-keyboard" id="dos"></li>UI DESIGN</a>
            <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li>DIGITAL MEDIA</a>
            <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li>CONTACT</a>
          </ul></Fade> 
          <div class="page" id="p1">
            <Fade><section class="icon fa fa-bolt"><span class="title">Web Development</span>
             <span class="hint"> <Projects /></span>
             </section></Fade>   
     </div>
    <div class="page" id="p2">
         <Fade>    <section class="icon fa fa-keyboard-o"><span class="title">Type</span></section></Fade>  
          </div>
     <div class="page" id="p3">
            <section class="icon fa fa-rocket"><span class="title"><Salon /></span></section>
          </div> 

                  <div class="page" id="p4">
            <section class="icon fa fa-dribbble">
              <span class="title">Dribbble</span>
              <p class="hint">
                <a href="https://dribbble.com/albertohartzet" target="_blank">Im ready to play, <span class="hint line-trough">invite me </span> find me</a>
              </p>
              <p class="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
            </section>
          </div>

          <div class="page" id="p5">
            <section class="icon fa fa-plus-circle">
              <span class="title">More</span>
              <p class="hint">
                <span>You love one page & CSS only stuff? </span><br/>
                <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
              </p>
            </section>
          </div> 


</div>
 
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default NavBar;