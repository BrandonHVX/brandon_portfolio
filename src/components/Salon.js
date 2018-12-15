import React, { Component } from 'react';

import Plyr from 'react-plyr';


export default class Salon extends Component{
  render(){
    
    return (
     
     <div className="body-salon">
 
     <div id="main">
   <article>
   <header>  <button type="button" class="btn btn-primary">Digital Film/Video</button>
   <h3>SALATTO SALON</h3>
   
  
</header>
       erienced in video production. Interested in videographer/editor position with potential 
      for advancement and the ability to utilize and enhance existing skills.</article>
  
 
     
      
  <aside>
         <Plyr
         className="player"
      type="youtube" // or "vimeo"
      videoId='https://www.youtube.com/watch?v=wXFA-SFZaTc'
      width= "50%"
      height= "50%" />
      </aside>
     

    
      
      
        
    

     </div>
    </div>
   
  
    )
  }
}