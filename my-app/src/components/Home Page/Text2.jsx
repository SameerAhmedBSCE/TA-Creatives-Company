import React from 'react';
import './Text2.css'; // Import the CSS file for custom animations

const Text2 = () => {
  return (
    <div
      className="text-center"
      style={{ backgroundColor: 'rgb(16, 21, 26)', paddingTop: '20px', paddingBottom: '20px' }}
    >
      <h1 className="text-5xl text-white font-bold mb-4 bounce">
        Our Services
      </h1>
      <p className="text-xl text-white typewriter">
        We offer a wide range of services to meet your business needs
      </p>
    </div>
  );
};

export default Text2;
