import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";


import { LuBus } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { getProducts } from "../../api/products";
import Title from "../Title";
const SectC = ( {category}) => {
  const [products, setProducts ] = useState([]);
  useEffect(() => {
    getProducts({ limit:4, filters:{category}})
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, []);
  return (
    <>  <Title label={category||"Our Products"} className='text-1xl font-medium ms-20 text-teal-800 '/>
     <div className="mx-16 p-2  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-2 rounded-lg">
    
      {products.map((menu) => {
        return (
         
          <div className="ms-2 my-3  shadow-lg max-w-auto max-h-auto rounded-lg">
            <div className=" h-36  text-center  rounded-lg ">
              <div className="bg-green-500 w-8 h-8 float-right mr-4 mt-4 rounded-lg">
                <FaHeart className=" text-red-600 mt-2 ml-2 " />
              </div>
              <img
                src={menu.url}
                alt="Error"
                className="h-24 rounded-full  w-24 mx-16 "
              />
            </div>

            <h2 className="ml-2 my-2 text-xl font-semibold ">
              {menu.category}
            </h2>
            <h3 className="ml-2 my-2 text-xl font-semibold ">{menu.name}</h3>
            <p className="ml-2 my-2 text-md font-extralight">{menu.brand}</p>
            <p className="text-slate-700 ml-1 my-2 p-1">
              <LuBus className="inline mr-2 text-zinc-900" />
              Free Delivery
            </p>
            <p className="ml-1 my-2 p-1 text-red-500 inline-block">
              $ {Math.floor(menu.price * 0.8)}
              <span className="text-red-500 ml-1 line-through">
                ${menu.price}
              </span>
            </p>
            <p className=" float-right p-1  text-black  mt-2 mr-2  ">
              {menu.rating}
              <IoIosStarOutline className="inline ms-1 mb-1 text-red-500" />
            </p>
          </div>
         
        );
      })}
       </div>
    </>
  );
};

export default SectC;
