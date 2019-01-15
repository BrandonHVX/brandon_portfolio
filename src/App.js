import React, { Component } from 'react';
import Card from './components/Card.js';
import './css/App.css';
import Navi from './components/BottomNavi';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Synergy from './components/Synergy.js';
import bgheader from './images/bgheader.png';
import BandsTA from './components/BandsTA.js';
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import phone from './images/iphone.png';



function Landing() {
     return(
<div class="landing">
<img src ={bgheader} />
<Link to="/home/webdevelopment">View My Work</Link>

</div>
  )
}

function Home() {
  return(
<div class="webdev">

 <Header />


</div>
)

}


function WebDev() {
  return(
<div class="page">
<div class="title">WebDev</div>


<div className="subpage" >


<SynergyCard />
<NyxCard />
</div>

<Navi />    
</div>
)
}


function DigitalMedia() {
  return (
    <div class="page">
<div class="title">Digital Media</div>
<Header />
<Slider />
<Navi />    
</div>
  )
}


function Design() {
  return (
    <div>
<div class="title">Design</div>

 <Navi />    
 </div>
  )
}


function Resume (){
  return (
    <div>
      <div class="title">Resume</div>
      <Header />
      <Navi />    
    </div>
  )
}







function SynergyCard (){
  return (
    <div class="section syncard">
    <div class="container">
      <div class="row">
        <div class="one-half column phones">
            <img class="phone" src={phone}/>
       </div>
        <div class="one-half column ">
        
          <h4 class="hero-heading">Social Media fitness app connecting users who love to exercise</h4>
          <a class="button button-primary" href="http://getskeleton.com">View Project</a>
       
        </div>
      </div>
    </div>
  </div>
  )
}

function NyxCard (){
  return (
    <div class="section nyxcard">
    <div class="container">
      <div class="row">
        <div class="one-half column phones">
            <img class="phone" src={phone}/>
       </div>
        <div class="one-half column ">
        
          <h4 class="hero-heading">Social Media fitness app connecting users who love to exercise</h4>
          <a class="button button-primary" href="http://getskeleton.com">View Project</a>
       
        </div>
      </div>
    </div>
  </div>
  )
}












class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
<div>

    
     <BrowserRouter>
      
 
       <div>
    
 
       
       <Route path="/" exact component={Landing} />
             
             <Route path="/home/webdevelopment" component={WebDev} />
             <Route path="/home/digitalmedia" component={DigitalMedia} />
          <Route path="/home/webdevelopment"component={Home} />
          <Route path="/home/design" component={Design} />
          <Route path="/home/resume" component={Resume} />
             

       </div>
     </BrowserRouter>
     </div>
    );
  }
}

export default App;

 


