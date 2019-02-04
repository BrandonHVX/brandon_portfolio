import React, {Component} from "react";
import phone from '../images/iphone.png';
import synergylogo from '../images/synergylogo.png';

import nyx from '../images/nyxlogo.png';

class Synergy extends Component {
    render(){
        return (


 
<div class="wrapper">
 

  <section id="home" class="sec-main-nyx">
  

      <div class="main-heading-page">
      <img class="phone" style={{ maxHeight: '260px' }} src={phone}/>
      
      <img class="synergylogo" src={nyx}/>

     <h3 >New York Times: Top Stories API </h3> </div>
  </section>
  
  <div class="section synphone">
<div class="container synbg">
  <div class="row">
    <div class="one-half column ">
        <img class="phone" src={phone}/>
   </div>
    <div class="one-half column text ">
    
      <h4 class="hero-heading">   
NYX NEWS is the new way to get your daily top stories from The New York Times. Our platform allows you to easily select your favorite three sections from the New York Times and displays in a new and creative format.

</h4>
    </div>
  </div>
</div>          

</div>
  
  
  
  

  <section id="services" class="sec-services">
    <div class="container">
      <h1>Features</h1>

      <hr />

      <div class="row">
        <div class="col-sm-4">
       
        <i class="far fa-4x fa-newspaper"></i>
          <h2 class="h3">  News Web Application </h2>

          <p> Top News Stories from all sections of the New York Times </p>
        </div>

        <div class="col-sm-4">
        <i class="fab fa-4x fa-flipboard"></i>

          <h2 class="h3">Flipboard Inspired </h2>

          <p> Concept inspired by Flipboard allowing users to customize their feed of various sections and topics.</p>
        </div>

        <div class="col-sm-4">
        <i class="fas fa-4x fa-filter"></i>

          <h2 class="h3">Filtered Prefrences</h2>

          <p>Profiles are filtered through</p>
        </div>
      </div>
    </div>
  </section>

  <section id="folio" class="sec-folio">
    <div class="container">
      <h1>Product Gallery</h1>

      <hr />

      <div class="row">
        <div class="col-sm-4">
          <img class="center-block" src="https://source.unsplash.com/Oog0wehKxYs/450x450" alt="By Håkon Sataøen" />
        </div>

        <div class="col-sm-4">
          <img class="center-block" src="https://source.unsplash.com/EfpOiZvPbT4/450x450" alt="By Samuel Zeller" />
        </div>

        <div class="col-sm-4">
          <img class="center-block" src="https://source.unsplash.com/2aoVQXwLf3g/450x450" alt="By Scott Webb" />
        </div>
  
     

      </div>
    </div>
  </section>

  <section id="services" class="sec-services">
    <div class="container">
      <h1>Technology</h1>

      <hr />

      <div class="row">
        <div class="col-md-4">
        <i class="fab fa-4x fa-react"></i>
        <h2 class="h3">React.js</h2>

          <p>Front end development framework.
Dynamic buttons and interactive front end.
</p>
        </div>

        <div class="col-md-4">
        <i class="devicon-express-original colored"></i>
     
        <h2 class="h3">Express.js</h2>

<p>
Backend development framework used to host The NY Times API.
Intergration with Axios for HTTP request and responses of json data.




</p>
        </div>
  

  
      </div>
    </div>
  </section>

 

  </div>






        )
    }
}

export default Synergy;