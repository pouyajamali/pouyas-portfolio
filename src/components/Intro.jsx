import React from "react";
import "../stars.scss";
import me from "../images/me.png";
import Resume from "../images/Resume.pdf"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import "./Intro.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// import Typed from "react-typed";

class Intro extends React.Component {
  
  render() {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    return (
      <div id="home" className="intro route bg-image background">
        <div id="navbar" className="navbar">
          <button className="link-button"><AnchorLink className="link" href='#aboutMe'>About Me</AnchorLink></button>
          <button className="link-button"><AnchorLink className="link" href='#work-experiences'>Work Experiences</AnchorLink></button>
          <button className="link-button"><AnchorLink className="link" href='#projects'>Projects</AnchorLink></button>
        </div>
        
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-container">
          <img src={me} className="Me" />
          <h1 className="name">Pooya Jamali</h1>
          <p className="job-title">Software Engineer</p>
          <p className="info">pjamali@sfu.ca | +1 778-320-6716</p>
          <div className="button-container">
            {/* <button className="button"    onClick={(e) => {e.preventDefault(); window.location.href='http://google.com';}}><img src={github} className="button-image" /></button> */}
            <button className="button" onClick={() => openInNewTab('https://github.com/pouyajamali')}><img src={github} className="button-image" /></button>
            <button className="button" onClick={() => openInNewTab('https://www.linkedin.com/in/pooya-jamali-0b9076205/')}><img src={linkedin} className="button-image" /></button>
            <button className="button-resume" onClick={() => openInNewTab(Resume)}>Download Resume</button>
          </div>
        </div>
        <script>
          console.log("dool")
          {/* window.onscroll = function() {scrollFunction()};
          function scrollFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "30px 10px";
            document.getElementById("logo").style.fontSize = "25px";
          } else {
            document.getElementById("navbar").style.padding = "80px 10px";
            document.getElementById("logo").style.fontSize = "35px";
          }
        } */}
        </script>
      </div>
    );
  }
}

export default Intro;


























        {/* <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am XYZ</h1>
              {/* <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p> */}
              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div> */}