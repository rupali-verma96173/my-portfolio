import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useRef } from "react";
const App = () => {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
        <Navbar
        heroRef = {heroRef}
        aboutRef = {aboutRef}
        skillsRef = {skillsRef}
        projectsRef = {projectsRef}
        educationRef = {educationRef}
        contactRef ={contactRef}
        />
       <div ref={heroRef}> 
  <Hero contactRef={contactRef} />  
</div>

           

        <div ref = {aboutRef}>
          <About/>
          </div>

        <div ref = {skillsRef}>
          <Skills/>
          </div>

<div ref={projectsRef}>
  <Projects />
</div>

<div ref={educationRef}>
  <Education />
</div>

<div ref={contactRef}>
  <Contact />
</div>
        <Footer/>
    </div>
  )
}

export default App