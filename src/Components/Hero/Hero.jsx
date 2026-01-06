import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg';
import Typical from 'react-typical';
const Hero = ({ contactRef }) => {

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behaviour: 'smooth'});
    }
  };

  return (
    <div className='hero'>
        {/* <img src={profile_img} alt="Profile" /> */}
      <h2>
  Hi, I'm <span className="name-gradient">Rupali Verma</span>, <br />
  <span className="typical-wrapper">
    <Typical
      steps={[
        'MERN Stack Developer.', 3000,
        'React.JS Developer.', 3000,
        'Full-Stack Developer.', 3000,
      ]}
      loop={Infinity}
      wrapper="span"
    />
  </span>
</h2>



  <p>I am a MERN Stack Developer skilled in building responsive
and user-friendly web applications using MongoDB,
Express.js, React.js, and Node.js.</p>
<div className="hero-action">
    <div className="hero-connect" onClick={scrollToContact}>Connect With Me</div>
    <div className="hero-resume">
        <a 
    href="https://drive.google.com/uc?export=download&id=1ZrBr-5UPIQwvlJR2tfildC9ErZoN4eRU" 
    download
    style={{ textDecoration: "none", color: "inherit" }}
  >
    My Resume
  </a>
    </div>
</div>
    </div>
  )
}

export default Hero