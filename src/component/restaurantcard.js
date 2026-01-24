import React from "react";
import { imageURL } from "../constants/utils";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
  
  return (
    <div className="res-card w-[230px] p-3 m-2 bg-gray-200 hover:bg-gray-400">
      <img
      className="res-logo "
      alt="res-logo"
      src={imageURL + cloudinaryImageId}
    />

      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
