
import React, { Component } from "react";
import Popup from "reactjs-popup";

import Menu from './Menu';
import Fade from '@material-ui/core/Fade';
import SkillsIcon from './SkillsIcon.js';
import ProjectsIcon from './ProjectsIcon.js';


const contentStyle = {
    background: "none",
    border: "none"
  };

function Skills (props) {
    return (
      <div {...props}>
      
        <h4>Button</h4>
      </div>
    );
  }

  function Projects (props) {
    return (
      <div {...props}>
       <Popup
            modal
            overlayStyle={{ background: "rgba(4, 240, 220, 0.93)" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <ProjectsIcon open={open} />}>
            {close => <Menu close={close} />}
          </Popup>
      </div>
    );
  }




  class Navi extends Component {
      render(){
          return(
              <div>
            <Skills />
            <Projects />
          



              </div>
          )
      }
  }

  export default Navi; 