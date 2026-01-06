import React from 'react'
import './Projects.css'
import theme_pattern from "../../assets/theme_pattern.svg";

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="projects-container">
            <div className="project-item">
                <div className="project-image">
                    <div className="project-overlay">
                        <h3>Tech Quiz Webapp</h3>
                        <p>Interactive quiz application with MCQs, score tracking and
                dynamic questions.</p>
                        <div className="project-links">
                            <a href="#" className="project-link">View Project</a>
                            <a href="https://github.com/rupali-verma96173/tech-quiz-app" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-info">
                    <h2>Tech Quiz WebApp</h2>
            <p>React.js, MongoDB, Node.js, Express.js</p>
                </div>
            </div>
            <div className="project-item">
                <div className="project-image">
                    <div className="project-overlay">
                         <h3>Portfolio Website</h3>
              <p>
                Personal portfolio website to showcase my skills, projects and
                contact details.
              </p>
                        <div className="project-links">
                            <a href="#" className="project-link">View Project</a>
                            <a href="#" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-info">
                 <h2>Portfolio Website</h2>
            <p>React, CSS, Responsive Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects

