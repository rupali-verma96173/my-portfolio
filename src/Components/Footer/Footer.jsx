import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg.png';

const Footer = () => {
  return (
    <div className='footer'>
       
        <div className="footer-bottom">
            <hr />

            <div className="social-links">
  <a href="https://github.com/rupali-verma96173" target="_blank">GitHub</a>
  <a href="https://www.linkedin.com/in/rupali-verma-359352323/" target="_blank">LinkedIn</a>
  <a href="mailto:rupali96173@gmail.com">Email</a>
</div>


            <p style={{ color: 'white'}}>© 2024 Rupali Verma. All rights reserved.</p>
            <p style={{ textAlign: 'center'}}>Full Stack Developer</p>
        </div>
    </div>
  )
}

export default Footer

