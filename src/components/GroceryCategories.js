import React from "react";

const GroceryCategories = () => {
  const categories = ["Fruits 🍎", "Vegetables 🥦", "Dairy 🧀", "Snacks 🍪", "Beverages 🥤"];
  return (
    <section className="grocery-categories">
      <h2>Shop by Categories</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">{cat}</div>
        ))}
      </div>
    </section>
  );
};

export default GroceryCategories;
