import React from "react";
import chip8 from "../images/chip8.png";
import CBS from "../images/CBS.png"
import fmg from "../images/find_my_photographer.png"
import centreMobile from "../images/centre_mobile_project.png"
import consumableTracker from "../images/ConsumerTracker.jpg"
import "./Projects.css";
// import Typed from "react-typed";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects">
        <div id="projects-container">
          <h1 className="projects-title">Projects</h1>
        </div>

        <div className="project">
                <img src={consumableTracker} className="project-image" />
                <div className="project-text">
                    <h3>Consumable Inventory Tracker</h3>
                    <p>During this project a consumable tracker software was implemented to track the expiry dates of food and drink items by utilizing object-oriented design in Java.</p>
                    <li className="lines">Designed an enterprise level software with the MVC model in an agile environment</li>
                    <li className="lines">Developed a front-end for the project by utilizing Java Swing</li>
                    <li className="lines">Implemented a RESTful server side with Java Network and Spring Framework</li>
                    <li className="lines">Created a database for the server side by storing data in a JSON file with GSON library</li>
                    <li className="lines">Integrated the front-end and the back-end to deploy a complete solution</li>
                </div>
            </div>

        <div className="project">
                <img src={fmg} className="project-image" />
                <div className="project-text">
                    <h3>Find My Photographer</h3>
                    <p>Find My Photographer is a CRUD web platform that connects event organizers with freelance photographers.</p>
                    <li className="lines">Developed the front-end of the project by utilizing React framework</li>
                    <li className="lines">Created photographer portfolio browser which allowed clients to pick and compare different photographers</li>
                    <li className="lines">Implemented the booking feature which allowed clients to negotiate the event prices</li>
                    <li className="lines">Worked closely with the back-end team for front-end design and integration</li>
                </div>
            </div>

        <div className="project">
                <img src={CBS} className="project-image" />
                <div className="project-text">
                    <h3>Implementing and Improving Conflict-Based Search (CBS) Algorithm</h3>
                    <p>This project was focused on solving the multi agent path finding (MAPF) problem by the implementation of CBS algorithm and improving it by implementing the ICBS and CBSH algorithms with python.</p>
                    <li className="lines">Developed the CBS algorithm which found the optimal solution in 100% of the MAPF Puzzles</li>
                    <li className="lines">Optimized the CBS algorithm execution time and memory efficiency through reducing the number of generated nodes by around 92% with the implementation of ICBS</li>
                    <li className="lines">Improved the ICBS algorithm execution time and memory efficiency through reducing the number of generated nodes by around 16% with the implementation of CBSH</li>
                </div>
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



