import React, { useEffect, useRef, useState } from 'react';
import './About.css'; // Make sure to import your CSS

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <h2 className={isVisible ? 'fade-in-left' : 'fade-out-left'}>
        About Me
      </h2>
      <p className={isVisible ? 'fade-in-right' : 'fade-out-right'}>
        With a  B.Tech in Computer Science and Engineering from VIT (that’s a 9.28/10 GPA, not to brag!), I’m all about turning caffeine into code.
        
        My journey so far has been a wild ride through the realms of machine learning and full-stack web development. I’ve dabbled in creating a CNN model, Alzh-Net, to diagnose Alzheimer’s—because who doesn’t want to save the world, one pixel at a time? Oh, and I’ve also cooked up a framework to catch cataracts before they catch you!
        
        Currently, I’m wrangling code as an IT Analyst at Caterpillar, where I write Python scripts and develop Fast APIs like it’s a culinary masterpiece. My previous adventure at PharmEasy involved jazzing up the Surgicare website and optimizing Docker builds (seriously, those builds can be a bit temperamental).
        
        When I’m not deep in code  you might find me playing cricket, playing Valorant, dancing like nobody’s watching, or hopping distros on my Linux journey—distro hopping is one of my guilty pleasures! Let’s connect and make tech magic happen!
      </p>
    </div>
  );
};

export default About;
