import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar.js';
import WebDev from './WebDev.js';
import Tabs from './Tabs.js';
import Tab from './Tab.js';
import Salon from './Salon.js';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import SkillsIcon from './SkillsIcon.js';
import Menu from './Menu';


const contentStyle = {
  background: "none",
  border: "none"
};



class Projects extends Component {
    render(){
        return (
<Fade right>


<WebDev />



      

          
        
            
      
            
            
      
            </Fade>
        
        
        )  
        
    }
}

export default Projects;