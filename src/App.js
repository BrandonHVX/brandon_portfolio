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
import Resume from './components/Resume';
import MyAvatar from './components/Avatar.js';
import SynergyCard from './components/SynergyCard.js';
import SalonCard from './components/SalonCard.js';
import ScrollTop from './components/ScrollTop.js';
import NYXcard from './components/NYXcard.js';
import NYX from './components/NYX.js';
import Chip from '@material-ui/core/Chip';

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

<Header />

<div className="subpage" >

<h6 class="title">

<Chip label="Web Development" className="title-button" variant="outlined" color="primary"/>

</h6>



<SynergyCard />
<NYXcard />

</div>
<Navi />    
</div>
)
}


function DigitalMedia() {
 
  return (
    <div class="page">

<Header />
<h4 class="title">
<Chip label="Digital Media" className="title-button" variant="outlined" color="primary"/>
</h4>
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
    <div class="page">
    
<div class="title">
<Chip label="Design" variant="outlined" color="primary"/>

</div>

 <Navi />    
 </div>
  )
}


function ResumePage (){
  return (
    <div class="page">
      <div class="title">
      <Chip label="Resume" variant="outlined" color="primary"/>
      </div>
      <Header />
      <div class="subpage">
      <Resume />

      </div>
      <Navi />    
    </div>
  )
}













function SynergyPage(){
  return (
<div class="page">


<Header />



<div className="subpage" >



<Synergy />
</div>

<Navi2 />    
</div>

  )
}


function NYXPage(){
  return (
<div class="page">


<Header />

<div className="subpage" >
<NYX />



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
          <Route path="/home/resume" component={ResumePage} />
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

 


