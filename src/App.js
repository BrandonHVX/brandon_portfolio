import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from "reactjs-popup";

import Menu from './components/Menu';
import Synergy from './components/Synergy';
import BurgerIcon from './components/BurgerIcon';
import Fade from 'react-reveal/Fade';
import WebDev from './components/WebDev.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DigitalMedia from './components/DigitalMedia.js';

import bgheader from "./components/bgheader.png";

const contentStyle = {
  background: "none",
  width: 300,
  
  margin: "auto",
  border: "none", 
  padding: 0,
};
function UserGreeting(props) {
  return <h2>Good Morning</h2>;
}

function GuestGreeting(props) {
  return <p>Hello,Good Afternoon! I'm Brandon, a developer, desiger and media producer
  dedicated to creating powerful and intuitive web applications.</p>;
}
function Greeting () {

if (new Date().getHours() < 12) {
  return <UserGreeting />;
}
else {
  return <GuestGreeting />;
}

}

function  Home() {
 
  return(

  <div id="navi">
           <div class="ct" id="t1">
            <div class="ct" id="t2" >
            <div class="ct" id="t3">
            <div class="ct" id="t4">
            <div class="ct" id="t5">
   
       <Fade right>
           
          <ul id="menu">

            <a href="#t1"><li class="icon fa fa-bolt" id="uno"></li>WEB DEV</a>
            <a href="#t2"><li class="icon fa fa-keyboard" id="dos"></li>DIGITAL MEDIA</a>
            <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li>UI DESIGN</a>
            <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li>RESUME</a>
          </ul>
        
        </Fade> 
   
       
        <div class="page" id="p1">
             <section>
           
             <span class="hint"> 
             
             <WebDev />
          
             </span></section>  
          </div>
   

  
    <div class="page" id="p2">
  
       <Fade>   
        
       <section >
   
          <span class="hint"> 
         <DigitalMedia />
          </span>
          </section>

       </Fade>  

    </div>
   
   
   <div class="page" id="p3">
         
   
          <section >
        
          <span class="hint"> </span>
          </section>



         
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




function Landing() {

 

    return(
      <div class="landing-page">
 <div class="bg-img"></div>
     
     
     <div class="landing-text">
    

 


 <p>    

 <Greeting /> 

  <div class="center-button">


          <button class="button"><Link to="/projects#t2">VIEW MY WORK</Link></button>
  
</div>
    

  </p>
  
  


    </div>
      

          
      </div>
    )
  }





class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (        <div>
     
    
      <BrowserRouter>
       
        <div>

 <div class="headlogo">
     <div class="bgheader"><img src ={bgheader} /></div>
            <Popup
          modal
          overlayStyle={{ background: "rgba(4, 240, 220, 0.93)" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}>
          {close => <Menu close={close} />}
        </Popup>
        
        </div>
          <Route path="/" exact component={Landing} />
          <Route path="/projects" component={Home} />
         
        </div>
      </BrowserRouter></div>
    );
  }
}


export default App;
 


