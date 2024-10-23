// src/components/Loading.tsx
import React from 'react';
import './Loading.css'; // Optional: for styling
import galaxy from "../galaxy.gif"
const Loading: React.FC = () => {
  return (
    <div className="loading-screen">
      <img src={galaxy} alt="Loading..." />
    </div>
  );
};

export default Loading;
