import React from "react";
import { CDN_URL, RES_IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //console.log(props); // Return object
  let { cuisines } = resData.info;
  cuisines = cuisines.splice(0, 3);

  return (
    <div className="res-card">
      <img
        src={RES_IMG_CDN_URL + resData.info.cloudinaryImageId}
        alt="Delicious food"
        className="res-logo"
      />
      <div className="card-content">
        <p className="card-title">{resData.info.name}</p>
        <p className="card-rating">
          Rating: <span>{resData.info.avgRating}</span>
        </p>
        <p className="card-cuisines">
          <span>Cuisines: </span>
          {cuisines.join(", ")}...
        </p>
        <p className="card-cuisines">
          Cost: <span>{resData.info.costForTwo}</span>
        </p>
        <p className="card-cuisines">
          ETA: <span>{resData.info.sla.slaString}</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
