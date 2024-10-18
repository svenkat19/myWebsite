import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiKubernetes, SiFlask, SiMongodb, SiPowerapps, SiPowerautomate, SiTypescript, SiTensorflow, SiKeras, SiMysql, SiOracle, SiDataverse } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Java', icon: <FaJava color="#007396" /> },
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
    { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'Oracle', icon: <SiOracle color="#F80F0F" /> },
    { name: 'PowerApps', icon: <SiPowerapps color="#742774" /> },
    { name: 'PowerAutomate', icon: <SiPowerautomate color="#0066FF" /> },
    { name: 'Dataverse', icon: <SiDataverse color="#44C460" /> }, // Updated Dataverse color
    { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
    { name: 'Keras', icon: <SiKeras color="#D00000" /> },
    { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {skills.slice(0, 11).map(skill => (
          <div key={skill.name} style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: 'rgba(47, 48, 48, 0.5)', // Set box color with 50% opacity
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid rgba(0, 0, 0, 0.5)', // Subtle black border
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow effect
              display: 'inline-block'
            }}>
              <div style={{ fontSize: '40px' }}>{skill.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {skills.slice(11).map(skill => (
          <div key={skill.name} style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: 'rgba(47, 48, 48, 0.5)', // Set box color with 50% opacity
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid rgba(0, 0, 0, 0.5)', // Subtle black border
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow effect
              display: 'inline-block'
            }}>
              <div style={{ fontSize: '40px' }}>{skill.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
