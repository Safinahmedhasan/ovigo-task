import React, { useState, useEffect } from "react";
import "./Banner.css"; // Make sure to create this CSS file for styling

const Banner = () => {
  const [textParts, setTextParts] = useState([
    "Explore",
    "the World",
    "and",
    "Discover",
    "New Places",
  ]);

  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartIndex((prevIndex) => (prevIndex + 1) % textParts.length);
    }, 2000); // Change part every 2 seconds

    return () => clearInterval(interval);
  }, [textParts]);

  return (
    <div className="pt-20 md:pt-0">
      <div className="banner-container">
        <video
          src="../../../public/travel1.mp4"
          autoPlay
          muted
          loop
          controls={false}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="text-overlay">
          <p className="travel-text">
            {textParts.map((part, index) => (
              <span
                key={index}
                className={index === currentPartIndex ? "active" : ""}
              >
                {part}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
