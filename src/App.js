import React, { Component } from 'react';

import './App.css';
import Navi from './components/BottomNavi';
import { BrowserRouter, Route, Link } from "react-router-dom";

import bgheader from './images/bgheader.png';



function Header(){
  return(
    <div class="headlogo">
     <div class="bgheader"><Link to="/"><img src ={bgheader} /></Link></div>
 </div>
  )
}


function Landing() {
     return(
<div class="landing-page">
    <h1>Landing</h1>
<Link to="/home/webdevelopment">HOME</Link>

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

<div className="subpage" >

</div>

<div class="title"><h1>WebDev</h1></div>
<Header />

</div>
)
}


function DigitalMedia() {
  return (
    <div class="page">
<div class="title"><h1>Digital Media</h1></div>
<Header />

</div>
  )
}


function Design() {
  return (
    <div>
<div class="title"><h1>Design</h1></div>
 <Header />
 </div>
  )
}


function Resume (){
  return (
    <div>
      <div class="title"><h1>Resume</h1></div>
      <Header />
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
             
      <Navi />    
        
       </div>
     </BrowserRouter></div>
    );
  }
}

export default App;

 


