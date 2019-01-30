import React, {Component} from "react";
import BrandonPic from '../images/BrandonPic.jpg';





class Resume extends Component {
    render(){
        return (

            <div>


<div class="header-container">
            <header class="wrapper cf">
                <div class="pos-b">
                    <img class="logo" src={BrandonPic} alt=""/>
                </div>
                <div class="pos-a">
                    <h1 class="me">Brandon Gines</h1>
                    <p class="title">Developer/Producer/Designer</p>
                </div>
                <p class="blurb">  Experienced creative professional with cross-functional skills including expertise in  full stack web development, film/video production and digital design, product marketing, customer service and client engagement. </p>
            </header>
        </div>

        <div class="main wrapper cf">
            <div class="pos-a">
                <section>
                    <h1 class="section-heading">Experience</h1>
                    <div class="section-content">
                        <section class="sub-section">
                            <h1 class="focus">Florida Film House</h1>
                            <div class="org">Tincidunt Quis 
                            <p class="time-frame">March 2010 - Present</p>
                            </div>
        
                            
                            <p class="description">Produced visual advertisements for online product and brand marketing campaigns. Skilled in cross-functional and team collaboration for preparation of company interviews, commercials, and short films.</p>
                        </section>
                        <section class="sub-section">
                            <h1 class="focus">Wyncode Academy</h1>
                            <div class="org">Full Stack Web Developer
                            <p class="time-frame">Aug 2018 - Oct 2018</p> </div>
                      


                            <p class="description">Designed and developed workout friend finder application using Ruby on Rails for database manage-
ment and React.js for front-end user experience. Interpreted Json data from existing API’s to match user interface design using React.js, CSS and SASS for interactive front end development. Collaborated and communicated with other developers through group standups and GitHub workflow to increase performance.
</p>
                        </section>
                        <section class="sub-section">
                            <h1 class="focus">Rum Bum Film and HD Studios </h1>
                            <div class="org">Videographer/Editor
                            <p class="time-frame"> September 2012 – August 2015</p>
                            </div>
                            
                            <p class="description">Responsible for all aspects of video production including meeting with clients determine their communications needs, developing concepts and script content, and filming and editing to produce video content.
</p>
                        </section>
                       
                    </div>
                </section>
                <section>
                    <h1 class="section-heading">Education</h1>
                    <div class="section-content">
                        <section class="sub-section">
                            <h1 class="focus">Wyncode Academy</h1>
                            <p class="org">Full Stack Web Development Program </p>
                            <p class="description">August 2018 - October 2018</p>
                            <p class="description">Miami, FL</p>
                        </section>                 
                        <section class="sub-section">
                            <h1 class="focus"> St Louis Agency of Training and Employment </h1>
                            <p class="org">Stepstone Productions Video Internship </p>
                            <p class="description">September 2003 - October 2005</p>
                            <p class="description">St. Louis, MO</p>
                        </section>
                        <section class="sub-section">
                            <h1 class="focus"> St Louis Community College </h1>
                            <p class="org">A.S. Graphic Design </p>
                            <p class="description">January 2002 - October 2003</p>
                            <p class="description">St. Louis, MO</p>
                        </section>                    
                    </div>
                </section>
            </div>
            <div class="pos-b">
                <section>
                    <h1 class="section-heading">Skills / Expertise</h1>
                    <div class="section-content">
                        <ol class="tag-cloud">
                            <li class="tag lvl-b">Avid understanding and experience in JavaScript, React.js, Express.js, Ruby on Rails, HTML and CSS.</li>
                            <li class="tag lvl-b">Proficient in interpreting Json data using React.js for dynamic and interactive front end development.</li>
                            <li class="tag lvl-b">Complete and in-depth understanding of creating custom components in React.js</li>
                            <li class="tag lvl-b">Exceptional communication and interpersonal skills  when collaborating with designers and back-end developers to implement and improve features </li>
                            <li class="tag lvl-b">In depth knowledge and experience using Microsoft Visual Code, Adobe Creative Suite, Final Cut Pro, Adobe XD and Sketch for coding, multimedia design, creation of visual content and prototyping.</li>
                        </ol>
                    </div>
                </section>
                <section>
                    <h1 class="section-heading">Contact</h1>
                    <div class="section-content">
    				<ul>
							<li>Miami Beach Police Department- Videographer/Editor for 2013 Officer Appreciation Awards.</li>
							<li>455.456.45.4558.4559</li>
							<li class="social-links"><a href="https://twitter.com/jasonadelia/" target="_blank"><img src="https://dl.dropbox.com/u/9286033/jdresume/img/twitter-bird-light-bgs.png" alt="@jasonadelia"/></a></li>
							<li class="social-links"><a href="https://www.linkedin.com/" target="_blank"><img src="https://dl.dropbox.com/u/9286033/jdresume/img/LinkedIn_IN_Icon_25px.png" alt="LinkedIn"/></a></li>
						</ul>
                    </div>
                </section>
                <section>
                    <h1 class="section-heading">Work Samples</h1>
                    <div class="section-content">
                        <p>Samples of work available upon request.</p>
						<p>View latest CSS experiments on <a href="https://codepen.io/jasonadelia" target="_blank">codepen</a>.</p>
                        <p>View this resume <span class="web-only">on a mobile device</span><span class="print-only">in a web browser</span> for the fully responsive experience <span class="print-only">(https://landoresume.github.com)</span></p>
                    </div>
                </section>
            </div>
        </div> 
		
		<div class="wrapper download-link web-only"><a href="#">Download as PDF</a></div>





 </div>

        )
    }
}

export default Resume;