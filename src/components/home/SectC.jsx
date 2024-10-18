import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { useSelector } from 'react-redux';

import { LuBus } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
const SectC= () => {
   
  const { loading, products, query } = useSelector((state) => state.products);
  return (
    <>
  {
    products.map((menu)=>{
     return (
      <div className='ms-2 my-3  shadow-lg max-w-auto max-h-auto rounded-lg'>
      <div className=' h-36  text-center  rounded-lg '>
      <div className='bg-green-500 w-8 h-8 float-right mr-4 mt-4 rounded-lg'><FaHeart className=' text-red-600 mt-2 ml-2 '/></div> 
      <img src={menu.url} alt="Error" className='h-24 rounded-full  w-24 mx-16 '/>
        </div>
    
       <h2 className='ml-2 my-2 text-xl font-semibold '>{menu.category}</h2>
       <h3 className='ml-2 my-2 text-xl font-semibold '>{menu.name}</h3>
       <p className='ml-2 my-2 text-md font-extralight'>{menu.brand}</p>
    <p className='text-slate-700 ml-1 my-2 p-1'><LuBus className='inline mr-2 text-zinc-900'/>Free Delivery</p>
    <p className='ml-1 my-2 p-1 text-red-500 inline-block'>$ {Math.floor(menu.price*0.8)}<span className='text-red-500 ml-1 line-through'>${menu.price}</span></p>
    <p className=' float-right p-1  text-black  mt-2 mr-2  '>{menu.rating}<IoIosStarOutline className='inline ms-1 mb-1 text-red-500'/></p>
     
  
      
        </div>
    )})
  }
      
     
    </>
  
  )
}

export default SectC
