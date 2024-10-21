import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Project from './Project';
import Certifications from './Certifications';
import cv from '../cv.png';

const Home = () => {
  return (
    <>
      {/* First Section: Introduction */}
      <div className="satisfy-regular">
        <div className="container flex-container" style={{ marginTop: '1rem' }}>
          <div>
            <h1>Hey there,</h1>
            <h1>Shashank Venkat here.</h1>
            <h2>
              {/* Typewriter effect */}
              <span style={{ color: '#007ACC', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Dancer 🕺🏽 ... ', 'Machine Learning Researcher 🤖🔍 ...', 'Full Stack Developer 🌐🔧 ...', 'IT Analyst 📈💻 ...','Amateur Space Lover 🌌🔭 ...','Wannabe History Geek 📜🕵🏽 ...']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <img src={cv} style={{ width: '4rem', height: '4rem' }} alt="CV" />
            </a>
          </div>
          <img
            src="tTBWByQwdtDAxTvZT4ADi-transformed.png"
            style={{ height: '35rem', width: '26rem', marginLeft: '30rem' }}
            alt="Profile"
          />
        </div>
      </div>

      {/* Second Section: About */}
      <section className="about full-page">
        <div className="content">
          <About />
        </div>
      </section>
      <section className="experience full-page">
        <div className="content">
          <Experience />
        </div>
      </section>
      <section className="skills full-page">
        <div className="content">
          <Skills />
        </div>
      </section>
      <section className="projects full-page">
        <div className="content">
          <Project />
        </div>
      </section>
      <section className="certifications full-page">
        <div className="content">
          <Certifications />
        </div>
      </section>
    </>
  );
}

export default Home;
