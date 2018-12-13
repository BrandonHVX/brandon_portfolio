import React from "react";
import Fade from 'react-reveal/Fade';

export default ({ open, ...props }) => (
 <Fade left><div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div></Fade> 
);