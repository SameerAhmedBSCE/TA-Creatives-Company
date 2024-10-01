import React from 'react';
import './CardComponent.css';
import videoSrc from "../../assets/Intro.mp4";
const CardComponent = () => {
  const cards = [
    {
      title: "Infinite Data Quality",
      text: "Fusion combines industry experts with advanced technologies and processes to provide seamless data ingestion with unmatched data quality transparency for driving continuous improvement across your operations.",
      linkText: "Learn More",
      linkUrl: "#",
    },
    {
      title: "Data Ingestion",
      text: "Fusion’s proprietary data ingestion platform seamlessly aggregates well information management system data, stream data, and vendor data in real-time, and rapidly flags data quality issues related to incoming data.",
      linkText: "Get Setup",
      linkUrl: "#",
    },
    {
      title: "Data Quality Operations",
      text: "Fusion is guided by 50+ energy experts dedicated to monitoring our customer’s data quality 24/7, 365.",
      linkText: "Explore Fusion",
      linkUrl: "#",
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <a href={card.linkUrl}>{card.linkText}</a>
        </div>
      ))}
      <div className="card video-card">
        <video src={videoSrc} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default CardComponent;
