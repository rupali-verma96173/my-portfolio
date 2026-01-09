import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import { Typewriter } from 'react-simple-typewriter'

const Hero = ({ contactRef }) => {

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='hero'>
      <h2>
        Hi, I'm <span className="name-gradient">Rupali Verma</span>, <br />
        <span className="typical-wrapper">
          <Typewriter
            words={[
              'MERN Stack Developer.',
              'React.js Developer.',
              'Full-Stack Developer.',
            ]}
            loop={0}          // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h2>

      <p>
        I am a MERN Stack Developer skilled in building responsive
        and user-friendly web applications using MongoDB,
        Express.js, React.js, and Node.js.
      </p>

      <div className="hero-action">
        <div className="hero-connect" onClick={scrollToContact}>
          Connect With Me
        </div>

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
