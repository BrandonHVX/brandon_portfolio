import React, {Component} from "react";
import bta from '../images/bta.svg';




class BandsTA extends Component {
    render(){
        return (

<div class="synergy">
            <div class="section bands">
            <div class="container">
              <div class="row">
                <div class="one-half column phones">
                    <img class="bta" src={bta}/>
               </div>
                <div class="one-half column ">
                
                  <h4 class="hero-heading">Bands by Taylor Alexandria</h4>
                  <a class="button button-primary" href="http://getskeleton.com">Try Skeleton</a>
               
                </div>
              </div>
            </div>
          </div>
         
         <div class="section values">
         <div class="container">
           <div class="row">
           <div class="one-third column value">
          <h2 class="value-multiplier">67%</h2>
          <h5 class="value-heading">Purchase Increase</h5>
          <p class="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
        </div>


        <div class="one-third column value">
          <h2 class="value-multiplier">90%</h2>
          <h5 class="value-heading">Multi-device Users</h5>
          <p class="value-description">Most of the world accesses the internet on multiple devices.</p>
        </div>
        <div class="one-third column value">
          <h2 class="value-multiplier">66%</h2>
          <h5 class="value-heading">Sad Users</h5>
          <p class="value-description">Percentage of users that are frustrated with page load times.</p>
        </div>

           </div>
         </div>
       </div>
          


          </div>




        )
    }
}

export default BandsTA;