import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const params = useParams();
  const info = useRestrauntMenu();
  const [show, setShow] = useState(null); 
  if (info === null) return <h1>Loading</h1>
  return (
    <div>
      <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">Restaurants Menu</h1>
       {info.map((res, index) => (
        <div key={res.id}>
           <RestaurantCategory index ={index} data = {res} show = {show} setShow = {(index)=>{
            setShow(index)
            }} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default RestaurantMenu;
