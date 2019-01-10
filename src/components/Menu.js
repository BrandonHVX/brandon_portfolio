import React from "react";
import Fade from 'react-reveal/Fade';
import MyAvatar from './Avatar.js';
import Profile from './Profile.js';
import YouTube from 'react-youtube';



const opts = {
  width: "100%",
   playerVars: { 'autoplay': 1, 'controls': 0 },

 };





export default ({ close }) => (
  <div>
         <div className="burger-menu open">
                 <div className="close" />
       
     </div>
      <Profile />          
  
  </div>
);