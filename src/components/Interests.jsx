import React from "react";
import me from "../images/me.png";
import sfu from "../images/SFUIC_Logo.jpg"
import "./Interests.css";
// import Typed from "react-typed";

class Interests extends React.Component {
  render() {
    return (
      <div id="extras" className="aboutMe">
        <div id="intro-container">
          <h1 className="aboutMe-title">Extras</h1>
        </div>
        <div className="aboutMe-content">
        <div className="education">
          <h2>Community Engagement</h2>
          <div className="sfu">
            <img src={sfu} className="sfu-image" />
            <div className="sfu-info">
              <div className="line1-edu">Simon Fraser University Iranian Club</div>
              <p className="line2-edu">President | January 2019 - May 2021 </p>
              {/* <div className="line2-edu">Bachelor of Applied sciences - Computer Science</div> */}
              <li>Managed a group of twenty volunteers towards promoting a better student culture</li>
              <li>Organized events in various topics for over three thousand members</li>
            </div>
          </div>
        </div>
          <div className="skills">
            <h2>Personal Interests</h2>
            <div>
              <li>Music: Playing Guitar and Harmonica</li>
              <li>Sports: Wrestling and Playing soccer for more than 15 years</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;



