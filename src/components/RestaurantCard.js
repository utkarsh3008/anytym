import React from "react";
import { CDN_URL, RES_IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //console.log(props); // Return object
  let { cuisines } = resData.info;
  cuisines = cuisines.splice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px] transition-transform duration-300 ease-in-out m-[10px] h-[400px] hover:scale-110 hover:shadow-lg">
      <img
        src={RES_IMG_CDN_URL + resData.info.cloudinaryImageId}
        alt="Delicious food"
        className="w-full h-[190px] block"
      />
      <div className="p-[16px]">
        <p className="m-0 text-[20px] font-extrabold text-[#333]">{resData.info.name}</p>
        <p className="my-2 text-[1em] text-[#555] break-words">
          Rating: <span className="font-bold text-black">{resData.info.avgRating}</span>
        </p>
        <p className="my-2 text-[1em] text-[#555] break-words">
          <span className="font-bold text-black">Cuisines: </span>
          {cuisines.join(", ")}...
        </p>
        <p className="my-2 text-[1em] text-[#555] break-words">
          Cost: <span className="font-bold text-black">{resData.info.costForTwo}</span>
        </p>
        <p className="my-2 text-[1em] text-[#555] break-words">
          ETA: <span className="font-bold text-black">{resData.info.sla.slaString}</span>
        </p>
      </div>
    </div>
  );
};


export const isRestaturantOpened = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white absolute bg-black p-2 rounded-lg text-center w-20">OPEN</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
