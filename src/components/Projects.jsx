import React from "react";
import chip8 from "../images/chip8.png";
import centreMobile from "../images/centre_mobile_project.png"
import "./Projects.css";
// import Typed from "react-typed";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects">
        <div id="projects-container">
          <h1 className="projects-title">Projects</h1>
        </div>

        <div className="projects-content">
            <div className="project">
                <img src={chip8} className="project-image" />
                <div className="project-text">
                    <h3>Chip-8 Emulator</h3>
                    <p>The objectives were to design and implement an old CHIP-8 machine and an interface which displayed the output of the apps that ran on the emulator, and it prompted the user for different segments of the app.</p>
                    <li className="lines">Developed the front-end of the project by utilizing JavaScript, CSS and HTML</li>
                    <li className="lines">Built a text editor which could open CHIP-8 opcodes as string, edit them and save them as opcodes. It was mainly used to edit or create CHIP-8 games</li>
                    <li className="lines">Made an automated testing script to unit test and validate the functionality of the Chip-8 emulator</li>
                    <li className="lines">Submitted project on time, received an A as a grade, and was selected as one of the top 3 projects of the class</li>
                </div>
            </div>

            <div className="project">
                <img src={centreMobile} className="project-image" />
                <div className="project-text">
                    <h3>Centre Mobile Plus Customer Database</h3>
                    <p>This project was developed for Centre Mobile Plus in Montreal, QB with the purpose of developing a database for their customer information.</p>
                    <li className="lines">Developed an enterprise software by utilizing python in an agile environment</li>
                    <li className="lines">Created local database which is easy to back up by non-technical staff by using SQLite</li>
                    <li className="lines">Wrote a variety of SQL queries to create a relational database to store customer information in a well-structured manner</li>
                </div>
            </div>


        </div>

      </div>
    );
  }
}

export default Projects;



