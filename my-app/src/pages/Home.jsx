import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VideoSlider from '../components/VideoSlider';
import CardComponent from '../components/CardComponent';
import Texts from '../components/Texts';

import Text2 from '../components/Text2';
import FormWithVideo from '../components/FormWithVideo';
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <Text2/>
      <VideoSlider /> 
      
      <CardComponent />
      < Texts />
      <FormWithVideo/>
     
    </div>
  );
};

export default HomePage;
