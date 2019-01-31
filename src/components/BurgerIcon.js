import React from "react";
import MyAvatar from './Avatar.js';




export default ({ open, ...props }) => (

    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
    <div className="bar2" key="b2" >     <MyAvatar />   </div> 
    <div className="bar3" key="b3" /> 

  </div>
);