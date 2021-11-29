import React from "react";
import me from "../images/me.png";
import sfu from "../images/sfu.png"
import "./AboutMe.css";
// import Typed from "react-typed";

class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutMe" className="aboutMe">
        <div id="intro-container">
          <h1 className="aboutMe-title">About Me</h1>
        </div>
        <div className="aboutMe-content">
          <div className="get-know">
            <h2>Lets get to know me!</h2>
            <p>Highly motivated computer science student with over four years
               of experience in developing, testing, and debugging applications on embedded systems. Seeking a starting position in an organization where leading-edge skills, great communication and deep commitment to every project would be an asset to the company.</p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div>
              <button className="skills-button">C/C++</button>
              <button className="skills-button">Java</button>
              <button className="skills-button">Python</button>
              <button className="skills-button">R</button>
              <button className="skills-button">JavaScript</button>
              <button className="skills-button">React</button>
              <button className="skills-button">HTML</button>
              <button className="skills-button">CSS</button>
              <button className="skills-button">Node.js</button>
              <button className="skills-button">Android</button>
              <button className="skills-button">SQL</button>
              <button className="skills-button">Jira</button>
              <button className="skills-button">Network Protocols</button>
              <button className="skills-button">Git/GitHub/Bitbucket</button>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="sfu">
            <img src={sfu} className="sfu-image" />
            <div className="sfu-info">
              <div className="line1-edu">Simon Fraser University</div>
              <div className="line2-edu">Bachelor of Applied sciences - Computer Science</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;



