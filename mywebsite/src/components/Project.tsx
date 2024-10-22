import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

// Import the images
import alzhnet from '../Alzhnet.png'; // Update the path as necessary
import DDL from '../DDL.png'; // Update the path for PharmEasy logo
import mednet from '../mednet.png'; // Update the path for Caterpillar logo
import svr from '../svr.jpg';
import github from '../github.png';
import research from '../research.png'
interface ProjectItem {
  year: string;
  role: string;
  description: string[]; // Change description to an array of strings
  technologies: string[];
  logo: string;
  ref: string;
}

const PROJECTS: ProjectItem[] = [
  {
    year: "JUL 2024",
    role: "MRI-based Automated Diagnosis of Alzheimer’s Disease using Alzh-Net Deep Learning Model",
    description: [
      'Developed a CNN-based model, Alzh-Net, to aid in diagnosing and segmenting Alzheimer’s disease symptoms through image analysis.',
      "Designed and implemented a dual CNN architecture, Alzh-Net Upper and Lower, for multi-scale feature extraction.",
      "Captured global patterns and broad perspectives in input images by employing convolutional layers with varied strides and max-pooling layers.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "SkLearn", 'Pandas', 'Numpy'],
    logo: alzhnet, // Use the imported logo,
    ref: "https://github.com/svenkat19/Alzh-Net"
  },
  {
    year: "DEC 2022",
    role: "Data-Efficient Deep Learning Framework for Detecting Cloudy Vision in Human Eye",
    description: [
      "Understanding existing models for cataract detection.",
      "Developed a model to improve diagnosis of cataract with higher accuracy with a dataset of over 10000 images",
    ],
    technologies: ["Python", "Sklearn", "Tensorflow", "OpenCV", "Pandas", "NumPy"],
    logo: DDL, // Use the imported logo
    ref: "https://github.com/svenkat19/Data-Efficient-Deep-Learning-Framework-for-Detecting-Cloudy-Vision-in-Human-Eye"
  },
  {
    year: "DEC 2022",
    role: "Classification of Imbalanced Multivariate Data Using Surface to Volume Multiclass Classifier Tree",
    description: [
      "Extended SVR trees for multiclass datasets.",
      "Proposed a solution to extend SVR trees for Multiclass classification of balanced and imbalanced datasets."
    ],
    technologies: ["Python", "Sklearn", "Pandas", "Numpy"],
    logo: svr, // Use the imported logo
    ref: "https://www.doi.org/10.56726/IRJMETS32590"
  },
  {
    year: "NOV 2022",
    role: "MedNet Medical Platform",
    description: [
      "Developed a web platform for the health system providing online video call consultations with doctors.",
      "Implemented real-time hospital search based on location and bed availability and promoted digital record keeping to reduce paper usage."
    ],
    technologies: ["EJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL", "PeerJS"],
    logo: mednet, // Use the imported logo
    ref: "https://github.com/svenkat19/MedNet"
  },
];

const Project: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <section className="project-section" ref={projectRef}>
      <h2 className={`project-heading ${isVisible ? 'fade-in' : 'fade-out'}`}>Projects</h2>
      <div className={`project-list ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {PROJECTS.map((proj, index) => (
          <div key={index} className={`project-item ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="project-year">
              <img src={proj.logo} alt={`${proj.logo} Logo`} className="project-logo" />
            </div>
            <div className="project-details">
              <h2 className="project-role">
                {proj.role} <br />
              </h2>
              <ul className="project-description">
                {proj.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>  // Render each description as a list item
                ))}
              </ul>
              <div className="project-technologies">
                {proj.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-badge">{tech}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                <a href={proj.ref} style={{ display: 'flex', alignItems: 'center' }}>
                  <img className="ref-link" src={proj.logo===svr?research:github} alt="GitHub" style={{ width: '3rem', height: '3rem', marginLeft: '0rem' }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
