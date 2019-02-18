import React, { Component } from 'react';
import Lightbox from  "react-lightbox-component";
import BandsCard from './BandsCard.js';
import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube';


const opts = {

	playerVars: {  'controls': 0 },
	}

var images = [
    {
      src:  require("../images/iPhoneXS1.jpg"),
      title: 'Beach Chat',
      description: 'Splash Page',
    },
    {
        src:  require("../images/iPhoneXS2.jpg"),
        title: 'Beach Chat',
        description: 'Messages',
      },
      {
        src:  require("../images/iPhoneXS3.jpg"),
        title: 'Beach Chat',
        description: 'Chat Page',
      },
      
  ]; 
 

  
  class LightBox extends React.Component {
	state = { show: false }
  
	showModal = () => {
	  this.setState({ show: true });
	}
	
	hideModal = () => {
	  this.setState({ show: false });
	}
	  
	render() {
	  return (

			<div class="uxpage">

		
	
		
		  <Modal show={this.state.show} handleClose={this.hideModal} >
			<i class=" fas fa-times"
 onClick={this.hideModal}> </i>
		  <div className="close" />
			
			<YouTube
        videoId="b5NxOYfERy0"
        opts={opts} className="youtube-video"
        
      />
			
		  </Modal>
 <div class="main-heading-page">
        <Lightbox
        images={images}
        thumbnailWidth='180px'
        thumbnailHeight='370px'
     
        /> 
<Button class="button-ux" variant="contained" color="primary" 
 onClick={this.showModal}> View Prototype</Button>
		 



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

  
  export default LightBox;