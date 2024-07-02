import React, { useState, useEffect , useContext } from "react";
import RestaurantCard , {isRestaturantOpened} from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { RESTAURANT_API_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShowOfflinePage from "./ShowOfflinePage";
import UserContext from "../utils/userContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnlineStatus();
  const RestaurantWithOpenState = isRestaturantOpened(RestaurantCard)
  const {loggedInUser , setUserName} = useContext(UserContext);

  console.log(loggedInUser , "userName");

  useEffect(() => {
    fetchData();
    console.log("Use Effect Called"); // Called after the component rendered
  }, []);

  const fetchData = async () => {
    let data = await fetch(RESTAURANT_API_URL);
    let res = await data.json();
    console.log(
      res?.data
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
    <div className="px-[110px]">
      <div className="flex">
        <div>
          <input
            type="text"
            className="p-2 rounded-sm border-2 border-[#ea4c89]"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={getInputSearchText}
          ></input>
          <button className=" w-[7rem] m-[15px] cursor-pointer bg-[#ea4c89] rounded-lg border-none box-border mt-[16px] 
          text-white inline-block font-sans text-[14px] font-medium  leading-[20px] list-none outline-none px-[10px] 
          py-[10px] relative text-center transition-colors duration-[100ms] 
          align-baseline select-none  hover:bg-[#f082ac]" 
          onClick={searchRestaurant}>
            Search
          </button>
        </div>
        <div className="filter">
          <button onClick={topRatedRestaurants} className=" m-[15px] cursor-pointer bg-[#ea4c89]
           rounded-lg border-none box-border mt-[16px] 
          text-white inline-block font-sans text-[14px] font-medium  leading-[20px] list-none outline-none px-[10px] 
          py-[10px] relative text-center transition-colors 
          duration-[100ms] align-baseline select-none  hover:bg-[#f082ac]">
            Top Rated Restaurants
          </button>
        </div>

        <div className="filter">
          <label>UserName: </label>
           <input
            type="text"
            className="p-1 rounded-sm border-2 border-[#ea4c89] my-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex p-[20px] flex-wrap justify-start items-center">
        {filteredData?.map((item) => (
          <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>

            {item.info.isOpen ? <RestaurantWithOpenState  resData={item}/> : <RestaurantCard resData={item} />}

            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
