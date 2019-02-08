import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import nyxphone from '../images/nyx-phone.png';
import nyx from '../images/nyxlogo.png';

class NyxCard extends Component {
    render (){
        return(

<div class="wrapper">
 

 <section id="home" class="sec-main-nyx">
 
 <img class="phone" style={{ maxHeight: '400px' }} src={nyxphone}/>
     <div class="main-heading"><img class="synergylogo" src={nyx}/>

    <h1>NEW YORK NEWS SITE </h1> </div>
    
 </section>
 
 
 
 
 
 <section id="about" class="sec-about">
   <div class="container" >


   

     <div class="row">
       <div class="col-sm-6 col-sm-offset-3">
         <p> Top News Stories site from New York Times API.</p>
          <p> <Link style={{ textDecoration: 'none' }} to='/web-development/nyx'><Button variant="contained" color="primary">View Project</Button></Link>

           
           </p>
       </div>

     </div>

   </div>
   
 </section>


 






  

 </div>

)
}
}


export default NyxCard;