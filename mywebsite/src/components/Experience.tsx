import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';
// Import the image
import iiitLogo from '../IIIT_Bangalore_Logo.svg.png'; // Update the path as necessary

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2021",
    role: "Software Developer Internship",
    company: "PharmEasy",
    description: "Worked on full-stack development at PharmEasy.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2023",
    role: "ML and AI Projects",
    company: "Alzh-Net",
    description: "Built the Alzh-Net deep learning model.",
    technologies: ["TensorFlow", "Keras", "Python"],
  },
  {
    year: "2024",
    role: "Application Developer",
    company: "Caterpillar",
    description: "Working on backend development with Python.",
    technologies: ["Flask", "FastAPI", "Python"],
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
              <img src={iiitLogo} alt="IIIT Bangalore Logo" className="experience-logo" />
              <p>{exp.year}</p>
              {/* Use the imported logo image */}
            </div>
            <div className="experience-details">
              <h2 className="experience-role">
                {exp.role} - <span className="experience-company">{exp.company}</span>
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
