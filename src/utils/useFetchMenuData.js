import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useFetchMenuData = (resId) => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    // This map function written becacuse itemcards can be available in any cards
    // so here we are checking which card has itemcards and setting that cards into the setResMenuData
    setRestaurantMenuData(json.data);
    json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
      if (item.card.card.itemCards) {
        setResMenuData(item.card.card.itemCards);
      }
    });
  };
  return [restaurantMenuData, resMenuData];
};

export default useFetchMenuData;
