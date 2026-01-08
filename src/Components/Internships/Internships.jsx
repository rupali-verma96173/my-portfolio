import React from 'react'
import './Internships.css'
import theme_pattern from "../../assets/theme_pattern.svg";

const Internships = () => {
  return (
    <div className='internships'>
        <div className="internships-title">
            <h1>My Internships</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="internships-container">
            <div className="internship-item">
                <div className="internship-header">
                    <div className="internship-company">
                        <h2>Techloom Solution</h2>
                        <p className="internship-role">MERN Stack Intern</p>
                    </div>
                    <div className="internship-duration">
                        <span>Sep 2025 - Oct 2025</span>
                    </div>
                </div>
                <div className="internship-content">
                    <p className="internship-description">
                        Worked as a MERN Stack intern, developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in building RESTful APIs, managing databases, and creating responsive user interfaces.
                    </p>
                    <div className="internship-skills">
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">Express.js</span>
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">RESTful APIs</span>
                    </div>
                </div>
            </div>

            <div className="internship-item">
                <div className="internship-header">
                    <div className="internship-company">
                        <h2>Amstech Incorporation Pvt Ltd</h2>
                        <p className="internship-role">Web Developer Intern</p>
                    </div>
                    <div className="internship-duration">
                        <span>Jan 2024 - Jun 2024</span>
                    </div>
                </div>
                <div className="internship-content">
                    <p className="internship-description">
                        Developed and maintained responsive web applications using modern front-end technologies. Collaborated with the development team to implement user-friendly interfaces and ensure cross-browser compatibility.
                    </p>
                    <div className="internship-skills">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">Bootstrap</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Responsive Design</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Internships

