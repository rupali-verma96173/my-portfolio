import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpeg";

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                {/* <img src={profile_img} alt=" " /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I am a passionate Frontend Developer eager to build interactive and user-friendly web applications. 
            I have learned and practiced technologies like HTML, CSS, JavaScript, and React, and I enjoy creating clean, 
            responsive, and engaging websites.</p>
                    <p> I am enthusiastic about learning new skills and contributing to meaningful projects. 
            Through personal and academic projects, I have gained hands-on experience and I am motivated to grow as a developer 
            and make an impact in the world of web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                     <div className="about-skill"> <p>React JS</p><hr style={{width:"70%"}} /></div> 
                     <div className="about-skill"> <p>JavaScript</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
             <div className="about-achievement">
        <h1>5+</h1>
        <p>Technologies Learned</p>
    </div>
    <hr/>
    <div className="about-achievement">
        <h1>2</h1>
        <p>Certifications</p>
    </div>
        </div>
    </div>
  )
}

export default About