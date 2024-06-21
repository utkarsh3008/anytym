import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useFetchMenuData from "../utils/useFetchMenuData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantMenuData, resMenuData] = useFetchMenuData(resId);

  if (restaurantMenuData == null && resMenuData == null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenuData.cards[2].card.card.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {resMenuData.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
