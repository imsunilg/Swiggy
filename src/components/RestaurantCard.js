import React from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props ) => {
  const {resData}=props;

  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla = {},
    cloudinaryImageId,
  } = resData?.info || {};
return (
  <div className="m-4 p-4 w-[250px] h-[350px] flex flex-col justify-between rounded-lg bg-gray-100 hover:bg-gray-200 transition">
    {/* Image */}
    <img
      className="h-32 w-full object-cover rounded-lg"
      alt={`${name} logo`}
      src={`${CDN_URL + cloudinaryImageId}`}
    />

    {/* Title */}
    <h3 className="font-bold py-2 text-lg">{name}</h3>

    {/* Info */}
    <div className="flex-1 text-sm text-gray-700">
      <p className="truncate">{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo}</p>
      <p>{sla?.slaString}</p>
    </div>
  </div>
);


};
export default RestaurantCard;