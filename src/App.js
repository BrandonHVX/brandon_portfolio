import React, { Component } from 'react';
import BandsCard from './components/BandsCard.js';
import './css/App.css';
import Navi from './components/BottomNavi';
import Navi2 from './components/BottomNavi2';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Synergy from './components/Synergy.js';
import bgheader from './images/bgheader.png';
import BandsTA from './components/BandsTA.js';
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import phone from './images/iphone.png';
import Button from '@material-ui/core/Button';
import MyAvatar from './components/Avatar.js';
import SynergyCard from './components/SynergyCard.js';
import SalonCard from './components/SalonCard.js';
import ScrollTop from './components/ScrollTop.js';

function Landing() {
     return(
<div class="landing">
<img src ={bgheader} />
<Link to="/home/web-development">View My Work</Link>

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
<Header />



<SynergyCard />



<Navi />    
</div>
)
}


function DigitalMedia() {
  return (
    <div class="page">
<div class="title">Digital Media</div>
<Header />
<div className="subpage" >
<BandsCard />
<SalonCard />



</div>

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









function NyxCard (){
  return (
    <div class="section nyxcard">
   
    <div class="container">
      <div class="row">
        <div class="one-half column nyxphone">
            <img class="phone" src={phone}/>
       </div>
        <div class="one-half column text ">
        
        <h4 class="hero-heading">Top News Application Using New York Times API</h4>
          <Link to='/web-development/nyx'><Button variant="contained" color="primary">View Project</Button></Link>
        </div>
      </div>
    </div>
    </div>
  
  )
}



function SynergyPage(){
  return (
<div class="page">
<div class="title">Synergy Project</div>

<Header />

<Synergy />

<div className="subpage" >




</div>

<Navi2 />    
</div>

  )
}


function NYXPage(){
  return (
<div class="page">
<div class="title">Synergy Project</div>

<Header />

<div className="subpage" >
nyx news



</div>

<Navi2 />    
</div>

  )
}

function BandsPage(){
  return (
<div class="page">
<div class="title">Synergy Project</div>

<Header />

<div className="subpage" >




</div>

<Navi2 />    
</div>

  )
}

function SalonPage(){
  return (
<div class="page">
<div class="title">Synergy Project</div>

<Header />

<div className="subpage" >


<Synergy />

</div>

<Navi2 />    
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
    
 <ScrollTop>
       
       <Route path="/" exact component={Landing} />
             
             <Route path="/home/web-development" component={WebDev} />
             <Route path="/home/digital-media" component={DigitalMedia} />
          <Route path="/home/web-development"component={Home} />
          <Route path="/home/design" component={Design} />
          <Route path="/home/resume" component={Resume} />
          <Route path='/web-development/synergy' component={SynergyPage} />
          <Route path='/web-development/nyx' component={NYXPage} />
         </ScrollTop>    

       </div>
     </BrowserRouter>
     </div>
    );
  }
}

export default App;

 


