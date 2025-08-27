import React, { useState, useEffect, useRef, useCallback } from "react";
import GroceryShimmer from "./GroceryShimmer";
import "../style/Grocery.css";

const GroceryList = () => {
  const allItems = [
  // Dairy
  { id: 1, name: "Milk", img: "https://picsum.photos/200?milk" },
  { id: 2, name: "Cheese", img: "https://picsum.photos/200?cheese" },
  { id: 3, name: "Butter", img: "https://picsum.photos/200?butter" },
  { id: 4, name: "Curd", img: "https://picsum.photos/200?curd" },
  { id: 5, name: "Paneer", img: "https://picsum.photos/200?paneer" },
  { id: 6, name: "Ghee", img: "https://picsum.photos/200?ghee" },

  // Bakery
  { id: 7, name: "Bread", img: "https://picsum.photos/200?bread" },
  { id: 8, name: "Brown Bread", img: "https://picsum.photos/200?brown_bread" },
  { id: 9, name: "Cake", img: "https://picsum.photos/200?cake" },
  { id: 10, name: "Cookies", img: "https://picsum.photos/200?cookies" },

  // Vegetables
  { id: 11, name: "Potato", img: "https://picsum.photos/200?potato" },
  { id: 12, name: "Tomato", img: "https://picsum.photos/200?tomato" },
  { id: 13, name: "Onion", img: "https://picsum.photos/200?onion" },
  { id: 14, name: "Carrot", img: "https://picsum.photos/200?carrot" },
  { id: 15, name: "Cabbage", img: "https://picsum.photos/200?cabbage" },
  { id: 16, name: "Cauliflower", img: "https://picsum.photos/200?cauliflower" },
  { id: 17, name: "Brinjal", img: "https://picsum.photos/200?brinjal" },
  { id: 18, name: "Spinach", img: "https://picsum.photos/200?spinach" },
  { id: 19, name: "Beans", img: "https://picsum.photos/200?beans" },
  { id: 20, name: "Capsicum", img: "https://picsum.photos/200?capsicum" },

  // Fruits
  { id: 21, name: "Banana", img: "https://picsum.photos/200?banana" },
  { id: 22, name: "Apple", img: "https://picsum.photos/200?apple" },
  { id: 23, name: "Mango", img: "https://picsum.photos/200?mango" },
  { id: 24, name: "Orange", img: "https://picsum.photos/200?orange" },
  { id: 25, name: "Grapes", img: "https://picsum.photos/200?grapes" },
  { id: 26, name: "Pineapple", img: "https://picsum.photos/200?pineapple" },
  { id: 27, name: "Papaya", img: "https://picsum.photos/200?papaya" },
  { id: 28, name: "Watermelon", img: "https://picsum.photos/200?watermelon" },
  { id: 29, name: "Guava", img: "https://picsum.photos/200?guava" },
  { id: 30, name: "Pomegranate", img: "https://picsum.photos/200?pomegranate" },

  // Pulses & Grains
  { id: 31, name: "Rice", img: "https://picsum.photos/200?rice" },
  { id: 32, name: "Wheat", img: "https://picsum.photos/200?wheat" },
  { id: 33, name: "Atta", img: "https://picsum.photos/200?atta" },
  { id: 34, name: "Maida", img: "https://picsum.photos/200?maida" },
  { id: 35, name: "Sooji", img: "https://picsum.photos/200?sooji" },
  { id: 36, name: "Toor Dal", img: "https://picsum.photos/200?toor_dal" },
  { id: 37, name: "Chana Dal", img: "https://picsum.photos/200?chana_dal" },
  { id: 38, name: "Moong Dal", img: "https://picsum.photos/200?moong_dal" },
  { id: 39, name: "Urad Dal", img: "https://picsum.photos/200?urad_dal" },
  { id: 40, name: "Rajma", img: "https://picsum.photos/200?rajma" },
  { id: 41, name: "Chickpeas", img: "https://picsum.photos/200?chickpeas" },
  { id: 42, name: "Masoor Dal", img: "https://picsum.photos/200?masoor_dal" },

  // Oils & Spices
  { id: 43, name: "Sunflower Oil", img: "https://picsum.photos/200?sunflower_oil" },
  { id: 44, name: "Mustard Oil", img: "https://picsum.photos/200?mustard_oil" },
  { id: 45, name: "Groundnut Oil", img: "https://picsum.photos/200?groundnut_oil" },
  { id: 46, name: "Salt", img: "https://picsum.photos/200?salt" },
  { id: 47, name: "Sugar", img: "https://picsum.photos/200?sugar" },
  { id: 48, name: "Turmeric", img: "https://picsum.photos/200?turmeric" },
  { id: 49, name: "Chilli Powder", img: "https://picsum.photos/200?chilli" },
  { id: 50, name: "Coriander Powder", img: "https://picsum.photos/200?coriander" },
  { id: 51, name: "Cumin Seeds", img: "https://picsum.photos/200?cumin" },
  { id: 52, name: "Black Pepper", img: "https://picsum.photos/200?black_pepper" },

  // Snacks
  { id: 53, name: "Biscuits", img: "https://picsum.photos/200?biscuits" },
  { id: 54, name: "Chips", img: "https://picsum.photos/200?chips" },
  { id: 55, name: "Namkeen", img: "https://picsum.photos/200?namkeen" },
  { id: 56, name: "Chocolates", img: "https://picsum.photos/200?chocolates" },
  { id: 57, name: "Soft Drinks", img: "https://picsum.photos/200?soft_drinks" },
  { id: 58, name: "Juice", img: "https://picsum.photos/200?juice" },

  // Household
  { id: 59, name: "Detergent", img: "https://picsum.photos/200?detergent" },
  { id: 60, name: "Soap", img: "https://picsum.photos/200?soap" },
  { id: 61, name: "Shampoo", img: "https://picsum.photos/200?shampoo" },
  { id: 62, name: "Toothpaste", img: "https://picsum.photos/200?toothpaste" },
  { id: 63, name: "Toilet Cleaner", img: "https://picsum.photos/200?toilet_cleaner" },
  { id: 64, name: "Handwash", img: "https://picsum.photos/200?handwash" },

  // Frozen
  { id: 65, name: "Frozen Peas", img: "https://picsum.photos/200?peas" },
  { id: 66, name: "Ice Cream", img: "https://picsum.photos/200?icecream" },

  // Dry Fruits
  { id: 67, name: "Almonds", img: "https://picsum.photos/200?almonds" },
  { id: 68, name: "Cashews", img: "https://picsum.photos/200?cashews" },
  { id: 69, name: "Raisins", img: "https://picsum.photos/200?raisins" },
  { id: 70, name: "Walnuts", img: "https://picsum.photos/200?walnuts" },
  { id: 71, name: "Dates", img: "https://picsum.photos/200?dates" },
  { id: 72, name: "Pistachios", img: "https://picsum.photos/200?pistachios" },

  // Beverages
  { id: 73, name: "Tea", img: "https://picsum.photos/200?tea" },
  { id: 74, name: "Coffee", img: "https://picsum.photos/200?coffee" },
  { id: 75, name: "Green Tea", img: "https://picsum.photos/200?green_tea" },

  // Breakfast
  { id: 76, name: "Cornflakes", img: "https://picsum.photos/200?cornflakes" },
  { id: 77, name: "Oats", img: "https://picsum.photos/200?oats" },
  { id: 78, name: "Muesli", img: "https://picsum.photos/200?muesli" },
  { id: 79, name: "Poha", img: "https://picsum.photos/200?poha" },
  { id: 80, name: "Upma Rava", img: "https://picsum.photos/200?upma" },
];

const [visibleItems, setVisibleItems] = useState(allItems.slice(0, 20));
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleItems.length < allItems.length) {
          setIsLoading(true);

          setTimeout(() => {
            const nextItems = allItems.slice(
              visibleItems.length,
              visibleItems.length + 10
            );
            setVisibleItems((prev) => [...prev, ...nextItems]);
            setIsLoading(false);
          }, 1000); // 1 sec shimmer
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, visibleItems, allItems]
  );

  return (
    <div className="grocery-section">
      <h2 className="section-title">Available Items 🛒</h2>
      <div className="grocery-list">
        {visibleItems.map((item, index) => {
          if (index === visibleItems.length - 2) {
            // attach observer to 2nd last item
            return (
              <div
                ref={lastItemRef}
                key={item.id}
                className="grocery-card"
              >
                <img src={item.img} alt={item.name} className="grocery-img" />
                <p className="grocery-name">{item.name}</p>
              </div>
            );
          }
          return (
            <div key={item.id} className="grocery-card">
              <img src={item.img} alt={item.name} className="grocery-img" />
              <p className="grocery-name">{item.name}</p>
            </div>
          );
        })}
      </div>

      {isLoading && <GroceryShimmer />}
    </div>
  );
};

export default GroceryList;