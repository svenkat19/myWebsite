import React from 'react';
import './Experience.css';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, align }) => {
  return (
    <div className={`timeline-item ${align}`}>
      <div className="timeline-item-content">
        <h3>{year}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="timeline">
      <TimelineItem
        year="2021"
        title="Software Developer Internship"
        description="Worked on full-stack development at PharmEasy"
        align="left"
      />
      <TimelineItem
        year="2023"
        title="ML and AI Projects"
        description="Built the Alzh-Net deep learning model"
        align="left"
      />
      <TimelineItem
        year="2024"
        title="Application Developer at Caterpillar"
        description="Working on backend development with Python"
        align="left"
      />
    </div>
  );
};

export default Experience;
