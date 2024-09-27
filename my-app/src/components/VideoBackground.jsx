import React from 'react';
import videoSrc from '../assets/video.mp4';

const VideoBackground = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full '>
      <video 
        className='w-full h-full object-cover opacity-80 blur-[2px]' 
        autoPlay 
        muted 
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
