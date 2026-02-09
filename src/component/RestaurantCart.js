import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCard from './restaurantcard';
import { clearItem } from '../utils/RestaurandCartSlice';
const RestaurantCart = () => {
    const RestCartItem = useSelector((store)=> store.resCart.items);
    const dispatch = useDispatch();
    const clearCart = () =>{
        dispatch(clearItem());
    }
    console.log(RestCartItem);
  return (
    <div>
        <h1 className='text-center font-bold text-2xl my-4'>Restaurant Cart</h1>
        <button className='text-center text-xl text-white bg-red-400 rounded-xl p-2 ml-9' onClick={()=>clearCart()}>Clear Cart</button>
        <div className='flex flex-wrap gap-3'>
            {RestCartItem.map((item) => <RestaurantCard key={item.info.id} resData={item}/>)}
        </div>
    </div>
  )
}

export default RestaurantCart