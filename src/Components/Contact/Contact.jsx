// import React, { useState } from 'react'
// import './Contact.css'
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setFormData({ name: '', email: '', message: '' });
//       alert('Message sent successfully!');
//     }, 1000);
//   };

//   return (
//     <div className='contact'>
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//         <div className="contact-section">
//           <div className="contact-left">
//             <h1>Let's talk</h1>
//             <p>I'm a fresher MERN Stack Developer and currently open to
// internship and entry-level opportunities.
// Feel free to reach out if you'd like to discuss projects,
// collaborations, or job opportunities.</p>
// <div className="contact-details">
//   {/* <div className="contact-detail">
//     <img src={mail_icon} alt="" />
//     <p>rupali96173@gmail.com</p>
//   </div> */}
//   <a
//   href="mailto:rupali96173@gmail.com"
//   className="contact-detail"
// >
//   <img src={mail_icon} alt="Email" />
//   <p>rupali96173@gmail.com</p>
// </a>

//   <a href="tel:+919617394004" className="contact-detail">
//   <img src={call_icon} alt="" />
//   <p>+91 9617394004</p>
// </a>

//   <div className="contact-detail">
//     <img src={location_icon} alt="" />
//     <p>Indore Madhya Pradesh</p>
//   </div>
// </div>
//           </div>
//           <form className="contact-right" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="name">Your Name</label>
//               <input 
//                 type="text" 
//                 placeholder='Enter your name' 
//                 name='name'
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="email">Your Email</label>
//               <input 
//                 type="email" 
//                 placeholder='Enter your email' 
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="message">Write your message here</label>
//               <textarea 
//                 name="message" 
//                 rows="10" 
//                 placeholder='Enter your message'
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>  
//             </div>
//             <button 
//               type='submit' 
//               className={`contact-submit ${isSubmitting ? 'submitting' : ''}`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Submit now'}
//             </button>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default Contact











import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_zgu32g6',
      'YOUR_TEMPLATE_ID',
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      '613jwHsEI6_ZIA73B'
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to send message!');
      setIsSubmitting(false);
    });
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm a fresher MERN Stack Developer and currently open to
            internship and entry-level opportunities.
            Feel free to reach out if you'd like to discuss projects,
            collaborations, or job opportunities.
          </p>

          <div className="contact-details">
            <a href="mailto:rupali96173@gmail.com" className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>rupali96173@gmail.com</p>
            </a>

            <a href="tel:+919617394004" className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+91 9617394004</p>
            </a>

            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Indore Madhya Pradesh</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`contact-submit ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
