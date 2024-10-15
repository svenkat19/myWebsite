import React from 'react';
import './Home.css';
import About from './About';

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

      {/* Third Section: Skills */}
      <section className="skills full-page">
        <div className="content">
          <h2>Skills</h2>
          <p>
            My skillset includes Machine Learning, Deep Learning, Fullstack Web Development, and creating intelligent, scalable solutions using technologies like Python, TensorFlow, React, Node.js, and more.
          </p>
        </div>
      </section>

      {/* Fourth Section: Experience */}
      <section className="experience full-page">
        <div className="content">
          <h2>Experience</h2>
          <p>
            At Caterpillar, I specialize in Python programming and intelligence-related tasks, while also working on fullstack development. Previously, I have worked on a variety of impactful projects in AI and web development.
          </p>
        </div>
      </section>

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
