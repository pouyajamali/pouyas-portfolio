import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import WorkExperiences from './components/WorkExperiences';
import Projects from './components/Projects'
import Interests from './components/Interests';
import Footer from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Intro />
    <AboutMe />
    <WorkExperiences />
    <Projects />
    <Interests />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
