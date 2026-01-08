import React from 'react'
import './Education.css'
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  return (
    <div className='education'>
        <div className="education-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="education-container">
            <div className="education-item">
                <div className="education-year">2021 - 2025</div>
                <div className="education-content">
                    <h2>Bachelor's Of Technology</h2>
                    <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya University</p>
                    <div className="education-details">
                        <p>Relevant Coursework: Oops, Database Management, Web Development</p>
                    </div>
                </div>
            </div>
            <div className="education-item">
                <div className="education-year">2020 - 2021</div>
                <div className="education-content">
                    <h2>Higher Secondary</h2>
                    <h3>Science Stream</h3>
                    <p>Govt G H Secondary School</p>
                    <div className="education-details">
                        <p>Focus on Mathematics, Physics, and Chemistry</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Education

