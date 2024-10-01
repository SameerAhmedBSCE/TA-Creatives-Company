import React from 'react';
import HeroSection from '../components/Home Page/HeroSection';
import ServicesComponent from '../components/Home Page/ServicesComponent';
import FeaturesSection from '../components/Home Page/FeaturesSection';
import VideoSlider from '../components/Home Page/VideoSlider';
import CardComponent from '../components/Home Page/CardComponent';
import Texts from '../components/Home Page/Texts';

import Text2 from '../components/Home Page/Text2';
import FormWithVideo from '../components/Home Page/FormWithVideo';
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      
      <VideoSlider /> 
      <Text2/>
      <ServicesComponent />
      
      <CardComponent />
      < Texts />
      <FormWithVideo/>
     
    </div>
  );
};

export default HomePage;
