import React from 'react';
import VideoBackground from './VideoBackground';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
      <VideoBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Corva - Data-Driven Operations</h1>
        <p className="mt-4">Optimize your operations with real-time data insights.</p>
      </div>
    </section>
  );
}

export default HeroSection;
