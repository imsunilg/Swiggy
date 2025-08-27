 

import React from "react";
import { FaTags, FaLeaf, FaShoppingBasket } from "react-icons/fa"; // for nice icons
import "../style/Grocery.css";

function GroceryOffers() {
  const offers = [
    { title: "Buy 1 Get 1 Free", detail: "On Apples & Bananas", icon: <FaShoppingBasket /> },
    { title: "20% Off", detail: "On all Vegetables", icon: <FaLeaf /> },
    { title: "50% Off", detail: "On Rice & Pulses", icon: <FaTags /> },
  ];

  return (
    <section className="grocery-offers">
      <h2 className="section-title">🔥 Hot Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="offer-icon">{offer.icon}</div>
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-detail">{offer.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GroceryOffers;

