import React from "react";
import iphone from './Apple-X.png';

export default ({ open, ...props }) => (
 <div className={open ? "projects-menu open" : "projects-menu"} {...props}>
  <img src={iphone} className="synphone" alt="logo" />
  </div>
);