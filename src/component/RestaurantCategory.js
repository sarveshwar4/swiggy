import React, { useState } from 'react'
import Itemcomponent from './Itemcomponent';

function RestaurantCategory({index,data, show, setShow}) {
    const {name} = data;
    const handler = () =>{
        if(index === show){
            setShow(null);
        }else
        setShow(index);
    }
  return (
    <div>
        <div className='w-6/12 mx-auto border border-gray-400 shadow-lg my-2 p-3' onClick={handler}>
        <div className='flex justify-between'>
            <span className='font-semibold text-lg my-2'>{name}</span>
            <span>⬇️</span>
        </div>
         {show == index && <Itemcomponent data = {data}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory