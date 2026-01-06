import React from 'react'
import './Skills.css'
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-title">
            <h1>My Skills</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="skills-container">
            <div className="skills-category">
                <h2>Frontend</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <p>React JS</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>JavaScript</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>HTML & CSS</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "95%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Bootstrap</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-category">
                <h2>Backend</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <p>Node JS</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Express JS</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>MongoDB</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>REST API</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-category">
                <h2>Tools & Others</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <p>Git & GitHub</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>VS Code</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Postman</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Responsive Design</p>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "90%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills

