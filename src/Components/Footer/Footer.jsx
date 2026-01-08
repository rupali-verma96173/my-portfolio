import React from 'react'
import './Footer.css'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import mailIcon from '../../assets/mail.svg'

const Footer = () => {
  return (
    <div className='footer'>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-text">
          <p className="footer-role">Full Stack Developer</p>
          <p className="footer-copy">© 2026 Rupali Verma | For learning purposes</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/rupali-verma96173" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/rupali-verma-359352323/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:rupali96173@gmail.com?subject=Portfolio%20Contact&body=Hi%20Rupali,%0A%0AI%20visited%20your%20portfolio.">
  <img src={mailIcon} alt="Email" />
</a>

        </div>

      </div>
    </div>
  )
}

export default Footer
