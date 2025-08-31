import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API_URL, CORS_URL, CORS_TOKEN } from "../utils/constants";
import { Link } from "react-router-dom";

import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [MasterlistOfRestaurants, setMasterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API_URL);

    //     const fetchData = async () => {
    //     const data = await fetch(CORS_URL+RESTAURANT_API_URL, {
    //   headers: {
    //   'x-cors-api-key': CORS_TOKEN
    //   }
    // });

    const json = await data.json();
    console.log(json?.data);
    const restaurants =
  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
  json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
  [];

setListOfRestaurants(restaurants);
setMasterListOfRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Look like you're offlice!!! Please check your internet connection...
      </h1>
    );
  }

  // Show shimmer while data is loading

  return listOfRestaurants.length === 0 &&
    MasterlistOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="border border-solid border-black-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1.5 bg-green-300 m-4 rounded-xl"
            onClick={() => {
              console.log({ searchText });
              //filter the restaurants based on search text
              const filteredRestaurants = MasterlistOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
<div className="search m-4 p-4 flex items-center">
        <button
          className="search m-4 p-2 bg-gray-100  rounded-xl"
          onClick={() => {
            let filterList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button></div>
      </div>
<div className="flex flex-wrap gap-4">
  {listOfRestaurants.map((restaurant, index) => (
    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id || index} >
      
      <RestaurantCard key={restaurant.info.id || index} resData={restaurant}
        className="w-64 h-80 flex flex-col justify-between border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
      />
    </Link>
  ))}
</div>




    </div>
  );
};

export default Body;
