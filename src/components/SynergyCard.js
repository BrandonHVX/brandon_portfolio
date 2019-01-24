import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import phone from '../images/iphone.png';

class SynergyCard extends Component {
    render (){
        return(

            <div class="section synphone">
            <div class="container synbg">
              <div class="row">
                <div class="one-half column ">
                    <img class="phone" src={phone}/>
               </div>
                <div class="one-half column text ">
                
                  <h4 class="hero-heading">Social Media fitness app connecting users who love to exercise</h4>
                  <Link to='/web-development/synergy'><Button variant="contained" color="primary">View Project</Button></Link>
                </div>
              </div>
            </div>          
        
          </div>


        )
    }
}



export default SynergyCard;
   