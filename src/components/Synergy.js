import React , { Component } from "react";
import iphone from './Apple-X.png';
import synergylogo from './synergylogo.png';




class Synergy extends Component {
    render (){
        return (
            <div class="wrapper">
            <header class="header">SYNERGY</header>
            <div class="main">
             
            
            


<div class="row">
      <div class="column">
          <img src={iphone} className="synphone" alt="logo" />
      </div>
  
      <div class="column-logo">
    
           <img src={synergylogo} className="synlogo" alt="logo" />
        
      </div>
   
  
</div>










     </div>
    
            <aside class="aside aside-2">   Motivated individual experienced in video production. Interested in videographer/editor
      position with potential for advancement and the ability to utilize and enhance existing skills. 
      Skilled in cross-functional and team collaboration for preparation of interviews, commercials, 
      short films and music videos with the use of interpersonal and customer services skills to enhance 
       client experience.</aside>
            <footer class="footer">Footer</footer>
          </div>
        )
    }
}

export default Synergy;