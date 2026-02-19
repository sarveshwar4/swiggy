import React, { useContext } from "react";
import { imageURL } from "../constants/utils";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/RestaurandCartSlice";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info; 
  const {user} = useContext(UserContext);
  const dispatch = useDispatch();
  const handleAddItem = ()=>{
    dispatch(addItem(resData));
  }
  return (
    <div className="res-card w-[230px] p-3 m-2 my-3 bg-gray-200 hover:bg-gray-400" data-testid = "res-card">
      <button className="relative ml-44 top-0 right-0 p-2 text-white rounded bg-black" onClick={()=>handleAddItem()}>Add</button>
      <img
      className="res-logo"
      alt="res-logo"
      src={imageURL + cloudinaryImageId}
    />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h3>{user.name}</h3>
    </div>
  );
};

// high order fun is just take the component and return the omponent it is basically a enhanser

export const PromotedRestraunt = (RestaurantCard) =>{
     return (props)=>{
       return (
        <div>
           <label className="absolute p-3 my-2 bg-gray-500 text-white rounded">Promoted</label>
           <RestaurantCard {...props}/>
        </div>
       )
     }
}

export default RestaurantCard;
