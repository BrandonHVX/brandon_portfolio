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
    <ul>

 <Link to="/home/webdevelopment"><a><li class="icon fa fa-bolt" id="uno"></li>WEB DEV</a></Link>
 <Link to="/home/digitalmedia"><a><li class="icon fa fa-keyboard" id="dos"></li>DIGITAL MEDIA</a></Link>
<Link to="/home/design"><a><li class="icon fa fa-rocket" id="tres"></li>UI DESIGN</a></Link>
<Link to="/home/resume"><a><li class="icon fa fa-plus-circle" id="cinco"></li>RESUME</a></Link>
</ul>
     </div>
       
      
    );
  }
}



export default SimpleBottomNavigation;