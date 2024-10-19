// Your existing imports and interface
import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

// Import the images
import iiitLogo from '../IIIT_Bangalore_Logo.svg.png'; // Update the path as necessary
import pharmeasyLogo from '../pharmeasy.png'; // Update the path for PharmEasy logo
import catLogo from '../cat.png'; // Update the path for Caterpillar logo

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  logo: string; // Added logo property
}

const EXPERIENCE: ExperienceItem[] = [
  {
    year: "JUN 2022 - SEPT 2022",
    role: "Research Intern",
    company: "IIIT-Bangalore",
    description: "Worked on full-stack development at PharmEasy.",
    technologies: ["Python", "Tensorflow", "Keras"],
    logo: iiitLogo, // Use the imported logo
  },
  {
    year: "DEC 2022 - JUN 2023",
    role: "Software Developer Intern",
    company: "PharmEasy",
    description: "Built the Alzh-Net deep learning model.",
    technologies: ["React", "TypeScript", "Python","Docker","Bootstrap"],
    logo: pharmeasyLogo, // Use the imported logo
  },
  {
    year: "JUL 2024",
    role: "Application Developer",
    company: "Caterpillar",
    description: "Working on backend development with Python.",
    technologies: ["Python", "PowerApps", "PowerAutomate","JavaScript","Dataverse"],
    logo: catLogo, // Use the imported logo
  },
];

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section className="experience-section" ref={experienceRef}>
      <h2 className={`experience-heading ${isVisible ? 'fade-in' : 'fade-out'}`}>Experience</h2>
      <div className={`experience-list ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className={`experience-item ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="experience-year">
              <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
              <p className="experience-year-text">{exp.year}</p> {/* Update the class here */}
            </div>
            <div className="experience-details">
              <h2 className="experience-role">
                {exp.role} <br/>
               <span className="experience-company">{exp.company}</span>
              </h2>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
