import React , {Component} from "react";
import Salon from "./Salon.js";
import BandsTA from "./BandsTA.js";

import Lightbox from 'react-images';
import bta from './bta.png';
import salon from './salon.svg';
import Popup from "reactjs-popup";
import Modal from './Modal.js';
import Menu from './Menu';
import Synergy from './Synergy';
import BurgerIcon from './BurgerIcon';
import Gallery from 'react-multimedia-gallery';
import { BrowserRouter, Route, Link } from "react-router-dom";


const contentStyle = {
    background: "none",
    width: 600,
    
    margin: "auto",
    border: "none", 
    padding: 0,
  };
 

const videoIdA = '8srfKgvV9_M';
const videoIdB = '8srfKgvV9_M';


const opts = {
   width: 600,
    playerVars: { 'autoplay': 1, 'controls': 0 },

  };


class DigitalMedia extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          videoId: videoIdA,
          player: null,
          
        };
    
        this.onReady = this.onReady.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
      }
    
      onReady(event) {
        console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
        this.setState({
          player: event.target,

        });
      }
    
      onPlayVideo() {
        this.state.player.playVideo();
      }
    
      onPauseVideo() {
        this.state.player.pauseVideo();
      }
    
      onChangeVideo() {
        this.setState({
          videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
        });
      }
    
      render() {
        return (
        
       
<div class="digitalmedia">
<span class="title">Digital Media</span>




<Link to="/bands-project"><BandsTA /></Link>


<Link to="/bands-project"><BandsTA /></Link>






          </div>
        );
      }
    }


export default DigitalMedia; 