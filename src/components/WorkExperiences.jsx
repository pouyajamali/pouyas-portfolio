import React from "react";
import me from "../images/me.png";
import "./WorkExperience.scss"

class WorkExperiences extends React.Component {
  render() {
    return (
      <div id="work-experiences" className="work-experiences">
        <div>
          <h1 className="work-title">Work Experiences</h1>
        </div>
        <div className="work-content">
          <div class="timeline">
            <div class="entry">
              <div class="title">
                <h3>May 2021 - Present</h3>
                <p>Software Developer, Beedie School of Business</p>
              </div>
              <div class="body">
                <ul>
                  <li>Created a twitter API software used to scrape data for research</li>
                  <li>Wrote the acceptance criteria and executed it by doing manual testing on the developed software</li>
                  <li>Designed and cleaned the data frames used to train the models in the research</li>
                </ul>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <h3>October 2020 – April 2021</h3>
                <p>Software Engineer Intern - Rostrum Medical Innovations</p>
              </div>
              <div class="body">
                <ul>
                  <li>Designed and developed efficient software features for medical devices by utilizing C++</li>
                  <li>Quality checked software by developing unit tests, and manually testing the acceptance criteria to meet user requirements</li>
                  <li>Wrote and reviewed feature descriptions, test plans and test reports</li>
                  <li>Organized codes by using version control tools (Bitbucket and JIRA)</li>
                </ul>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <h3>June 2019 – September 2020</h3>
                <p>Computer Technician - Geek Squad</p>
              </div>
              <div class="body">
                <ul>
                  <li>Diagnosed and repaired computer software (OS restores, virus removal, etc.) and hardware (dead hard drives, internal errors, etc.) for over twenty customers per shift</li>
                  <li>Provided different sets of training such as defragmentation and maintenance or installing a specific software for customers leading to improvement in their computer skills</li>
                  <li>Performed efficient data transfer and backup prior to restore and recovery procedures</li>
                </ul>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <h3>January – May 2018</h3>
                <p>Software Developer, Simon Fraser University</p>
              </div>
              <div class="body">
                <ul>
                  <li>Developed efficient software by following industry standards coding practices which provided statistical analysis results on imported datasets from excel spreadsheets using R</li>
                  <li>Created a GUI (utilizing the R library “Shiny”) to present analyzed data in a readable format</li>
                  <li>Developed unit tests for statistical analysis functions to ensure bug free software</li>
                </ul>
              </div>
            </div>
           

          </div>

        </div>
      </div>
    );
  }
}

export default WorkExperiences;



// <div className="time-span"></div>

// <div className="work-info"></div>  