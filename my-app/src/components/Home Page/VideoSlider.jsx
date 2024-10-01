import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSlider.css';

const sliderData = [
  
  {
    videoSrc: 'https://src.corva.ai/wp-content/uploads/2023/12/Product_Geo_Drilling_iso_screen_comp-v1.mp4',
    heading: 'Drilling Automation',
    desc: 'Drive high-performance drilling efficiency across fleets, resulting in better well performance to turn your P50 into a P75 well.',
  },
  {
    videoSrc: 'https://src.corva.ai/wp-content/uploads/2023/12/Product_Predictive_Drilling_iso_screen_comp-v1-1.mp4',
    heading: 'Drilling Automation',
    desc: 'Drive high-performance drilling efficiency across fleets, resulting in better well performance to turn your P50 into a P75 well.',
  },
  {
    videoSrc: 'https://src.corva.ai/wp-content/uploads/2023/12/Product_Completions_iso_screen_comp-v2-2.mp4',
    heading: 'Drilling Automation',
    desc: 'Drive high-performance drilling efficiency across fleets, resulting in better well performance to turn your P50 into a P75 well.',
  },
  {
    videoSrc: 'https://src.corva.ai/wp-content/uploads/2023/12/Product_Sustainability_iso_screen_comp-v1.mp4',
    heading: 'Drilling Automation',
    desc: 'Drive high-performance drilling efficiency across fleets, resulting in better well performance to turn your P50 into a P75 well.',
  }
];

export default function VideoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="video-slider relative " style={{ backgroundColor: 'rgb(16, 21, 26)',  paddingTop: '20px', paddingBottom: '20px'}}>
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative w-[1036px] h-[600.5px] " style={{ backgroundColor: 'rgb(16, 21, 26)',  paddingTop: '20px', paddingBottom: '20px'}}>
            <video
              src={slide.videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
            <div className="absolute bottom-14 left-0 p-4 bg--transparent text-white ">
              <h3 className="text-3xl font-bold">{slide.heading}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
