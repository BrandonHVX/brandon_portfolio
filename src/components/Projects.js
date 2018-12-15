import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar.js';
import Tabs from './Tabs.js';
import Tab from './Tab.js';
import Salon from './Salon.js';

class Projects extends Component {
    render(){
        return (

            <div className="projects-page">
              
                <Tabs>
        <div label="Web Development">
        I’m currently looking for a Jr. Full Stack Web Developer position. I have 10 years of experience
        working in multimedia production. I am currently leaning how to code and hope to use my exsisting 
        skills to enhnace my career as and Full Stack Web Developer.
        </div>
        <div label="| UX/UI">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="| Digital Media">
          <div><Salon /></div>
        </div>
      </Tabs>

            
        
            </div>
        
        
        )  
        
    }
}

export default Projects;