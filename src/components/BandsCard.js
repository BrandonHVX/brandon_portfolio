import React from 'react';
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
import iphone from '../images/Apple-X.jpg';
import Header from './Header.js';
import YouTube from 'react-youtube';
import Button from '@material-ui/core/Button';


const opts = {

	playerVars: {  'controls': 0 },
	}

class BandsCard extends React.Component {
	state = { show: false }
  
	showModal = () => {
	  this.setState({ show: true });
	}
	
	hideModal = () => {
	  this.setState({ show: false });
	}
	  
	render() {
	  return (

			<div class="bands-card">
	<div class="cards">
		
	
		
		  <Modal show={this.state.show} handleClose={this.hideModal} >
			<i class=" fas fa-times"
 onClick={this.hideModal}> </i>
		  <div className="close" />
			
			<YouTube
        videoId="8srfKgvV9_M"
        opts={opts} className="youtube-video"
        
      />
			
		  </Modal>

<p class="cards-text"><h3>Bands by Taylor Alexandria</h3>
	Business profile and interview with fashion designer Taylor Alexandria.
<div class="card-button"><Button variant="contained" color="primary" 
 onClick={this.showModal}> Watch Video</Button></div>
		</p>



</div>
</div>


	
	



	  )
	}
  }
  
  const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
	return (
	  <div className={showHideClassName}>
		<section className='modal-main'>
		  {children}
		  {/* <button
			onClick={handleClose}
		  >
			Close
		  </button> */}
		</section>
	  </div>
	);
  };
  
  
//   const container = document.createElement('div');
//   document.body.appendChild(container);

  
  export default BandsCard;