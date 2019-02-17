import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import phone from '../images/iphone.png';
import synergylogo from '../images/synergylogo.png';
import synlogin from '../images/syn-login.png';

class SynergyCard extends Component {
    render (){
        return(

<div class="wrapper">
 

 <section id="home" class="sec-main-syn">
 
 <img class="phone" style={{ maxHeight: '400px' }} src={synlogin}/>
     <div class="main-heading"><img class="synergylogo" src={synergylogo}/>

    <h1 >Your next workout partner is one swipe away.</h1> </div>
    
 </section>
 
 
 
 
 
 <section id="about" class="sec-about">
   <div class="container" >


   

     <div class="row">
       <div class="col-sm-6 col-sm-offset-3">
         <p> Social Media app designed to connect users in search of their next workout partner.</p>
          <p> <Link style={{ textDecoration: 'none' }} to='/web-development/synergy'><Button class="card-button" variant="contained" color="primary">View Project</Button></Link>

           
           </p>
       </div>

     </div>

   </div>
   
 </section>


 






  

 </div>

        )
    }
}



export default SynergyCard;
   