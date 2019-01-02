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



const opts = {
  width: "100%",
playerVars: { 'autoplay': 1, 'controls': 0 },

 };


class ControlledPopup extends Component {
    constructor(props) {
      super(props)
      this.state = { open: false }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
  
    }
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.setState({ open: false })
    }
  
    render() {
      return (
        <div>
          <button className="button" onClick={this.openModal}>
            Controlled Popup
          </button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="digitalmedia">
              <a className="close" onClick={this.closeModal}/>
              
             
              <YouTube videoId='8srfKgvV9_M' opts={opts} containerClassName="modal" />
            </div>
          </Popup>
        </div>
      )
    }
  }
  
export default ControlledPopup;