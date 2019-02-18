import React, { Component } from 'react';

import { BrowserRouter, Route, Nav, NavLink } from "react-router-dom";
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
  constructor(){
    super();

    this.state = {
       black: true
    }
}

changeColor(){
   this.setState({black: !this.state.black})
}

  render() {
  let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
    <div id="menu">
    <ul className="navi">
    {/* <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button> */}
             
<NavLink activeClassName='is-active' to="/home/web-development"><a><li class="icon fa fa-laptop-code" id="uno"></li>WEB DEV</a></NavLink>
<NavLink activeClassName='is-active' to="/home/digital-media"><a><li class="icon fas fa-video" id="dos"></li>VIDEOS</a></NavLink>
<NavLink activeClassName='is-active' to="/home/design"><a><li class="icon fas fa-palette" id="tres"></li>UX/UI DESIGN</a></NavLink>
<NavLink activeClassName='is-active' to="/home/resume"><a><li class="icon fas fa-file" id="cinco"></li>RESUME</a></NavLink>
</ul>
     </div>
       
      
    );
  }
}



export default SimpleBottomNavigation;