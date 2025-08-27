import React from "react";
import "../style/Grocery.css";

const GroceryShimmer = () => {
  return (
    <div className="grocery-list shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="grocery-card shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};

export default GroceryShimmer;
