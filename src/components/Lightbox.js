import React, { Component } from 'react';
import Lightbox from  "react-lightbox-component";
 
var images = [
    {
      src: "https://source.unsplash.com/Oog0wehKxYs/450x450",
      title: 'image title',
      description: 'image description'
    }
  ]; 
 
export default class LightboxExample extends Component {

 
  render() {

 
    return (
        <Lightbox
        images={images}
        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
          return (
            <img
              key={idx}
              src={image.src}
              className='img-circle'
              style={{width: width, height: height}}
              onClick={toggleLightbox.bind(null, idx)} />
          )
        }}/>
 

    );
  }
}