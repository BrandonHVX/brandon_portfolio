import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
const styles = {
  root: {
    width: "100%",
  
          position: 'fixed',
          bottom: 0,
          background: 'red',
          paddding: 20,
  },
};

class SimpleBottomNavigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div id="menu">
    <ul className="navi">

 <Link to="/home/web-development"><a><li class="icon fa fa-laptop-code" id="uno"></li>WEB DEV</a></Link>
 <Link to="/home/digital-media"><a><li class="icon fas fa-video" id="dos"></li>VIDEOS</a></Link>
<Link to="/home/design"><a><li class="icon fas fa-palette" id="tres"></li>DESIGN</a></Link>
<Link to="/home/resume"><a><li class="icon fas fa-file" id="cinco"></li>RESUME</a></Link>
</ul>
     </div>
       
      
    );
  }
}



export default SimpleBottomNavigation;