import React from "react";
import MyAvatar from './Avatar.js';


export default ({ open, ...props }) => (
 <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div class="avi"><MyAvatar /></div>
    
    

  </div>
);