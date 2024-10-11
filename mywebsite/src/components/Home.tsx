import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='satisfy-regular'>
        <div className="container flex-container" style={{ marginTop: '1rem' }}>
          <div>
            <h1>Hey there</h1>
            <h1>Shashank Venkat here.</h1>
          </div>
          <img 
            src="tTBWByQwdtDAxTvZT4ADi-transformed.png" 
            style={{height: '35rem', width: '26rem', marginLeft: '30rem'}} 
            alt="Profile" 
          />
        </div>
      </div>
      
      {/* <div className="container find-me">
        <p>WANNA CONNECT?</p>
        <div className="social-links">
          <a href="https://github.com/svenkat19" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="light-icon" />
          </a>
          <a href="https://www.linkedin.com/in/shashankvenkat18/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="light-icon" />
          </a>
          <a href="https://www.facebook.com/shaz.venk/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="light-icon" />
          </a>
        </div>
      </div> */}
    </>
  );
}

export default Home;
