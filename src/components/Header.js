import React, {Component} from "react";
import bgheader from '../images/bgheader.png';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MyAvatar from './Avatar.js';
import Popup from "reactjs-popup";

import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "10px"
  };
  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    height:"100vh",
    border: "none",
    overflow: "scroll",
  };


class Header extends Component {
    render(){
        return (

            <div className="header"><div class="bgheader"><Link to="/"><img src ={bgheader} /></Link></div>
       

       <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98",
                        height:"100vh", overflow: "scroll"
                     }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
 </div>

        )
    }
}

export default Header;