import React , {Component} from "react";
import SalonCard from "./SalonCard.js";
import BandsTA from "./BandsTA.js";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Plyr from 'react-plyr';
import Card from '@material-ui/core/Card';
import YouTube from 'react-youtube';
import Popup from "reactjs-popup";
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import MyAvatar from './Avatar.js';
import ProjectsIcon from "./ProjectsIcon.js";



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
          <div>
            {/* <YouTube videoId={this.state.videoId} onReady={this.onReady}  opts={opts} containerClassName="digitalmedia" />
            <button onClick={this.onPlayVideo}>Play</button>
            <button onClick={this.onPauseVideo}>Pause</button>
            <button onClick={this.onChangeVideo}>Change Video</button> */}
       


         <BandsTA />


          </div>
        );
      }
    }


export default DigitalMedia; 