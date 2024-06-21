import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { RESTAURANT_API_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShowOfflinePage from "./ShowOfflinePage";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
    console.log("Use Effect Called"); // Called after the component rendered
  }, []);

  const fetchData = async () => {
    let data = await fetch(RESTAURANT_API_URL);
    let res = await data.json();
    console.log(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantList(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("body loaded");

  function topRatedRestaurants() {
    let filteredData = restaurantList.filter((resList) => {
      return resList.info.avgRating > 4.3;
    });
    // setRestaurantList(filteredData);
    setFilteredData(filteredData);
  }

  const searchRestaurant = () => {
    const filteredData = restaurantList.filter((res) => {
      console.log(res.info.name, "name");
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(filteredData);
    console.log(restaurantList, "list");
  };

  const getInputSearchText = (e) => {
    setSearchText(e.target.value);
  };

  if (isOnline == false) {
    return <ShowOfflinePage />;
  }
  return restaurantList?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-filter-section">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={getInputSearchText}
          ></input>
          <button className="filter-btn" onClick={searchRestaurant}>
            Search
          </button>
        </div>
        <div className="filter">
          <button onClick={topRatedRestaurants} className="filter-btn">
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredData?.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
