import React, {Component} from "react";
import phone from '../images/iphone.png';
import synergylogo from '../images/synergylogo.png';
import nyxpage from '../images/nyx-page.png';
import nyx from '../images/nyxlogo.png';
import nyxphone from '../images/nyx-phone.png';
class Synergy extends Component {
    render(){
        return (


 
<div class="wrapper">
 

  <section id="home" class="sec-main-nyx">
  

      <div class="main-heading-page">
      <img class="phone" style={{ maxHeight: '260px' }} src={nyxphone}/>
      
      <img class="synergylogo" src={nyx}/>

     <h3 >New York Times: Top Stories API </h3> </div>
  </section>
  
  <div class="section synphone">
<div class="container synbg">
  <div class="row">
    <div class="one-half column ">
        <img class="phone" src={nyxpage}/>
   </div>
    <div class="one-half column ">
    
      <h5 class="hero-heading">   
NYX NEWS is the new way to get your daily top stories from The New York Times. Our platform allows you to easily select your favorite three sections from the New York Times and displays in a new and creative format.

</h5>
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

       
      </div>
    </div>
  </section>


<p></p>

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
Integration with Axios for HTTP request and responses of Json data.




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