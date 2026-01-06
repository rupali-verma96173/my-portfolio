import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm a fresher MERN Stack Developer and currently open to
internship and entry-level opportunities.
Feel free to reach out if you'd like to discuss projects,
collaborations, or job opportunities.</p>
<div className="contact-details">
  <div className="contact-detail">
    <img src={mail_icon} alt="" />
    <p>rupali96173@gmail.com</p>
  </div>
  <div className="contact-detail">
    <img src={call_icon} alt="" />
    <p>+91 9617394004</p>
  </div>
  <div className="contact-detail">
    <img src={location_icon} alt="" />
    <p>Indore Madhya Pradesh</p>
  </div>
</div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
             <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your email' name='email'/>
             <label htmlFor="">Write your message here</label>
             <textarea name="message" rows="8" placeholder='Enter your message'></textarea>  
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
    </div>
  )
}

export default Contact