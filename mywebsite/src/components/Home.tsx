import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Project from './Project';
import Certifications from './Certifications';
import Typeright from './Typeright';

const Home = () => {
  return (
    <>
      {/* First Section: Introduction */}
      <div id="home-section" className="satisfy-regular full-page">
        <Typeright />
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
