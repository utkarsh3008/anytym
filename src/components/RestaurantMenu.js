import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useFetchMenuData from "../utils/useFetchMenuData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItemIndex , setShowItemIndex] = useState(null)

  const [restaurantMenuData, resMenuData] = useFetchMenuData(resId);

  if (restaurantMenuData == null && resMenuData == null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenuData.cards[2].card.card.info;

 const categories = restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
  return item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 })


  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="text-lg font-bold">{cuisines.join(",")} - {costForTwoMessage}</h3>
      {/* Categories accordian */}

      {/* Controlled components */}
      {categories.map((data , index) => {
        return <RestaurantCategory 
        key={data?.card?.card?.title} 
        menuData = {data?.card?.card}
        showItem = {index == showItemIndex ? true: false}
        setShowItemIndex= {() => setShowItemIndex(index)}

        />
      })}
    </div>
  );
};

export default RestaurantMenu;
