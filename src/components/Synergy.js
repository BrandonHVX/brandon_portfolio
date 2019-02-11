import React, {Component} from "react";
import synlogin from '../images/syn-login.png';
import synprofile from '../images/syn-profile.png';
import synergyphone from '../images/synergy-phone.png';
import synergylogo from '../images/synergylogo.png';
import synphone from '../images/synphone.png';
import Lightbox from 'react-lightbox-component';


var images = [
  {
    src: "https://source.unsplash.com/Oog0wehKxYs/450x450",
    title: 'image title',
    description: 'image description'
  }
];






class Synergy extends Component {
    render(){
        return (


 
<div class="wrapper">
 

  <section id="home" class="sec-main-syn">
  

      <div class="main-heading-page">
      <img class="phone" style={{ maxHeight: '260px' }} src={synlogin}/>
      
      <img class="synergylogo" src={synergylogo}/>

     <h1 >Your next workout partner is one swipe away.</h1> </div>
  </section>
  
  <div class="section synphone">
<div class="container synbg">
  <div class="row">
    <div class="one-half column ">
        <img class="phone" src={synphone}/>
   </div>
    <div class="one-half column text ">
    
      <h6 class="hero-heading"> Synergy connects users with similar fitness goals to produce a greater workout experience. 
      Inspired by popular dating apps like Tinder and Bumble. Synergy allows users to simply swipe left or right to match with other users.
</h6>
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
       
        <i class="fas fa-4x fa-users"></i>
          <h2 class="h3">Social Media Platform </h2>

          <p>Sign-up, create profile and connect with indivduals with similar activity goals.</p>
        </div>

        <div class="col-sm-4">
        <i class="fas fa-4x fa-comments"></i>

          <h2 class="h3">In-App Messaging</h2>

          <p>Send and receive messages from your matches in real-time.</p>
        </div>

        <div class="col-sm-4">
        <i class="fas fa-4x fa-filter"></i>

          <h2 class="h3">Filtered Preferences</h2>

          <p>Profiles are filtered through your selected preferences including age, activities and location.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="folio" class="sec-folio">
    <div class="container">

     
        <img class="phone" src={synprofile}/>
  

  
     
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

          <p>Dynamic front-end with real time updates to enhance user experience.</p>
        </div>

        <div class="col-md-4">
      <i class="devicon-ruby-plain"></i>
     
        <h2 class="h3">Ruby</h2>

<p> Implementation of Devise, Paperclip and Geocoder gems for user authorization, uploading of images and distance/location of users.</p>
        </div>
        <div class="col-md-4">
      
      <i class="devicon-rails-plain"></i>
        <h2 class="h3">Rails</h2>

<p>Framework for MVC and database structure for user profiles with associated activities.</p>
        </div>

        <div class="col-md-4">
        <i class="devicon-bootstrap-plain"></i>
        <h2 class="h3">Bootstrap</h2>

<p>React-Bootstrap for UI design including buttons, forms and menus.</p>
        </div>
      </div>
    </div>
  </section>

          

  </div>






        )
    }
}

export default Synergy;