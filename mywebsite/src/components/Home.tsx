import React from 'react';
import './Home.css';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      {/* First Section: Introduction */}
      <div className="satisfy-regular">
        <div className="container flex-container" style={{ marginTop: '1rem' }}>
          <div>
            <h1>Hey there,</h1>
            <h1>Shashank Venkat here.</h1>
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
          <About></About>
        </div>
      </section>
      <section className="experience full-page">
        <div className="content">
          {/* <h2>Experience</h2>
          <p>
            At Caterpillar, I specialize in Python programming and intelligence-related tasks, while also working on fullstack development. Previously, I have worked on a variety of impactful projects in AI and web development.
          </p> */}
          <Experience></Experience>
                  </div>
      </section>
      {/* Third Section: Skills */}
      <section className="skills full-page">
        <div className="content">
          <Skills/>
        </div>
      </section>

      {/* Fourth Section: Experience */}

      {/* Fifth Section: Projects */}
      <section className="projects full-page">
        <div className="content">
          <h2>Projects</h2>
          <p>
            Some of my key projects include developing a medical platform for online consultations, an automated diagnosis system for Alzheimer’s, and various web applications using the MERN stack.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
