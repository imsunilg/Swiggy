import React from "react";
import "../style/Shimmer.css"; 
 
const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-line short"></div>
      <div className="shimmer-line"></div>
      <div className="shimmer-line"></div>
    </div>
  );
};

const Shimmer = () => {
  // Show 8 dummy cards while loading
  return (
    <div className="shimmer-container">
      {Array(8).fill("").map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;
