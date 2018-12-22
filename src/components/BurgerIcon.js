import React from "react";


export default ({ open, ...props }) => (
 <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
   <i class="fas fa-user-circle"></i>
  </div>
);