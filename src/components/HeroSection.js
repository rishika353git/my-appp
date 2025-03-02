import React from "react";
import "./Style/Banner.css";
import bannerImage from "../assets/banner.png"; // Import the image

const HeroSection = () => {
  return (
   <div className="container-fluid pb-4">
 <section 
      className="banner-section"
      style={{ backgroundImage: `url(${bannerImage})` }} // Apply inline
    >
      <div className="container">
        <h1 className="fw-bold">Design Your Perfect <br /> Custom Merchandise</h1>
        <p className="lead my-4">
          Create unique t-shirts and cups that tell your story. Easy to design, perfect to wear.
        </p>
        <button className="btn btn-lg p-4" aria-label="Start designing custom merchandise">
          Start Designing →
        </button>
      </div>
    </section>
   </div>
  );
};

export default HeroSection;
