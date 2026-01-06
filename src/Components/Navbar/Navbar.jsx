import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg.png';

const Navbar = ({
  heroRef, 
  aboutRef,
  skillsRef,
  projectsRef,
  educationRef,
  contactRef
}) => {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth"});
  };
  
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
      
        <ul className="nav-menu">
            <li onClick={() => scrollToSection(heroRef)}>Home</li>
            <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(educationRef)}>Education</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
        <div className="nav-connect" onClick={() => scrollToSection(contactRef)}>Connect With Me </div>
    </div>
  )
}

export default Navbar
