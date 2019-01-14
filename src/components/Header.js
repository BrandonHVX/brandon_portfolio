import React, {Component} from "react";
import bgheader from '../images/bgheader.png';
import { BrowserRouter, Route, Link } from "react-router-dom";




class Header extends Component {
    render(){
        return (

            <div class="headlogo">
            <div class="bgheader"><Link to="/"><img src ={bgheader} /></Link></div>
        </div>




        )
    }
}

export default Header;