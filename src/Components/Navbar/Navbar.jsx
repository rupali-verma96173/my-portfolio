import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg.png';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
const Navbar = ({
  heroRef, 
  aboutRef,
  skillsRef,
  educationRef,
  contactRef,
}) => {

  const navigate = useNavigate();
const location = useLocation();


  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);


  const goToSection = (ref) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      ref?.current?.scrollIntoView({ behavior: "smooth"});
    } else {
      navigate("/");
      setTimeout(() => {
        ref?.current?.scrollIntoView({ behavior: "smooth"});
      }, 300);
    }
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('nav-menu-overlay')) {
      setMenuOpen(false);
    }
  };
  
  return (
    <>
      <div className='navbar'>
          <img src={logo} alt="logo" onClick={() => goToSection(heroRef)} />
        
          <ul className="nav-menu">
            <li onClick={() => goToSection(heroRef)}>Home</li>
            <li onClick={() => goToSection(aboutRef)}>About Me</li>
            <li onClick={() => goToSection(skillsRef)}>Skills</li>
            <li onClick={() => goToSection(educationRef)}>Education</li>

              <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          </li>
          <li>
<NavLink to="/internships" onClick={() => setMenuOpen(false)}>Internships</NavLink>          </li>

          </ul>
          
          <div className="nav-right">
            <div className="nav-connect" onClick={() => goToSection(contactRef)}>Connect With Me</div>
            
            <div className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
      </div>

      <div 
        className={`mobile-menu-overlay ${menuOpen ? 'overlay-open' : ''}`}
        onClick={handleOverlayClick}
      >
        <div 
          className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="mobile-menu-list">
            <li onClick={() => goToSection(heroRef)}>Home</li>
            <li onClick={() => goToSection(aboutRef)}>About Me</li>
            <li onClick={() => goToSection(skillsRef)}>Skills</li>
            <li onClick={() => goToSection(educationRef)}>Education</li>

            <li>
  <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
    Projects
  </NavLink>
</li>

<li>
  <NavLink to="/internships" onClick={() => setMenuOpen(false)}>
    Internships
  </NavLink>
</li>
            <li className="mobile-connect" onClick={() => goToSection(contactRef)}>Connect With Me</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
