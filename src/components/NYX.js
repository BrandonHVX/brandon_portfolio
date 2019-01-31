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
    
      <h4 class="hero-heading">  Hi, my name is Alex Devero and I am a Web Designer & Developer based in Prague. I love crafting beautiful web pages in HTML5, CSS3 and JavaScript or jQuery. My other skills include WordPress, Photoshop, Illustrator. You can grab my CV in
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
          <h2 class="h3">Social Media </h2>

          <p>Connect with indivduals with similar goals.</p>
        </div>

        <div class="col-sm-4">
        <i class="fab fa-4x fa-flipboard"></i>

          <h2 class="h3">In-App Messaging</h2>

          <p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
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

          <p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
        </div>

        <div class="col-md-4">
        <i class="devicon-express-original colored"></i>
     
        <h2 class="h3">Express.js</h2>

<p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
        </div>
  

        <div class="col-sm-4">
        <i class="devicon-bootstrap-plain"></i>
        <h2 class="h3">Bootstrap</h2>

<p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="sec-contact">
    <div class="container">
      <h1>Hire me</h1>

      <hr />

      <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
          <form class="center-block" action="#" method="post">
            <div class="form-group">
              <label class="sr-only" for="inputName">Full name</label>

              <input id="inputName" class="form-control" type="text" placeholder="Adam Smith" required />
            </div>

            <div class="form-group">
              <label for="inputMail" class="sr-only">Email Address</label>

              <input id="inputMail" class="form-control" type="email" placeholder="adam.smith@mail.com" required />
            </div>

            <div class="form-group">
              <label for="inputMessage" class="sr-only">Your Message</label>

              <textarea id="inputMessage" class="form-control" name="message" cols="30" rows="8" required></textarea>
            </div>

            <div class="form-group">
              <button class="btn btn-default center-block" type="submit" value="Hire me">Hire me</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  </div>






        )
    }
}

export default Synergy;