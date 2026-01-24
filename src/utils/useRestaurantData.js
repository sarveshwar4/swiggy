import { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return listOfRestaurants;
};

export default useRestaurantData; 