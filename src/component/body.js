import { useState, useEffect } from "react";
import RestaurantCard from "./restaurantcard";
import SeemerUi from "./seemer-ui";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredList, setfilteredList] = useState([]);

  const [SearchText, setSearchText] = useState("");


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(()=>{
    fetchData();
  }, [])
  return listOfRestaurants.length == 0 || listOfRestaurants == undefined? <SeemerUi/> :(
    <div className="body ">
      <div className="filter flex items-center">
        <div className="search-bar m-4 p-4 flex items-center">
          <input type = 'text'value = {SearchText} className="px-4 py-2 search-filter border border-solid border-black rounded-lg" placeholder="type-here" onChange={
          (e)=>setSearchText(e.target.value)}/>

        <button className="m-3 px-4 py-2 bg-green-200 rounded-lg" onClick={()=>{
           const filteredList = listOfRestaurants.filter((restaurants)=>restaurants.info.name.toLowerCase().includes(SearchText.toLowerCase()));
           setfilteredList(filteredList);
        }}>Search</button>
        </div>
        <div>
          <button className="filter px-4 py-2 bg-gray-300 rounded-lg" onClick={() => {
            const filterList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4);
            setfilteredList(filterList);
          }}
        >
          Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ml-4">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
