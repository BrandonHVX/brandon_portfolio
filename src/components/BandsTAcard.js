import React , {Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import iphone from './Apple-X.png';
import Plyr from 'react-plyr';
import Popup from "reactjs-popup";
import YouTube from 'react-youtube';
import salon from './salon.svg';
import BandsTA from './BandsTA';
import bta from './bta.png';
import Button from '@material-ui/core/Button';

const contentStyle = {
  background: "none",
  width: 200,

  border: "none", 
  padding: 90,
};

const opts = {

playerVars: { 'autoplay': 1, 'controls': 0 },

 };


class BandsTAcard extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        open: false,
        player: null, }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.onPlayVideo = this.onPlayVideo.bind(this);
  
    }
    openModal (){
      this.setState({ open: true })

    }
    closeModal () {
      this.setState({ open: false })
    }

    onPlayVideo() {
      this.state.player.playVideo();
    }


  
    render() {
      return (
        <div >
        
       
          <Card className="projects-card">
          <CardHeader
        
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Bands by Taylor Alexandria"
        
      />
 <CardMedia className="card-media">

           <img src ={bta} className="video-img" />
      


 </CardMedia>

 <CardContent>
     <Typography component="p">
Business profile and interview with Bands by T.A. desiger Taylor Alexandria  
  </Typography>
<Typography component="p">
Produced and Edited by Brandon Gines </Typography>
 </CardContent>
 
 <CardActions>
 <Button variant="outlined" color="primary" onClick={this.openModal} >
        Play Video
      </Button>
    
        </CardActions>
</Card>
          
          
          
          
          <Popup
             modal
             open={this.state.open}
             
             overlayStyle={{ background: "rgba(4, 240, 220, 0.93)"}}
             contentStyle={contentStyle}
             closeOnDocumentClick={true}
            onClose={this.closeModal}
          >
          <div className="popup-video">
              <a className="close-video" onClick={this.closeModal}/>
              
        
              <YouTube videoId='8srfKgvV9_M' opts={opts}  /> 
            </div>
          </Popup>
        </div>
      )
    }
  }
  
export default BandsTAcard;