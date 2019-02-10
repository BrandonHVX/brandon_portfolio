import React, { Component } from 'react';
import Lightbox from  "react-lightbox-component";
 
var images = [
    {
      src:  require("../images/ic50.png"),
      title: 'image title',
      description: 'image description',
    },
    {
        src:  require("../images/tides.jpg"),
        title: 'image title',
        description: 'image description',
      },
      {
        src:  require("../images/zoe911.png"),
        title: 'image title',
        description: 'image description',
      },
      {
        src:  require("../images/kidslogo.png"),
        title: 'image title',
        description: 'image description',
      }
  ]; 
 
export default class LightboxExample extends Component {

 
  render() {

 
    return (
        <Lightbox
        images={images}
        thumbnailWidth='150px'
        thumbnailHeight='150px'/>
 

    );
  }
}