import React from "react";

import { useSelector } from "react-redux";
import { IoIosStarOutline } from "react-icons/io";




const SectB = () => {

const { loading, products} = useSelector((state) => state.products);





  return (
    <>
  
      {products.map((menu) => {
        return (
          <div className="ms-2 my-3   shadow-lg max-w-auto max-h-auto rounded-lg cursor-pointer hover:scale-105 hover:translate hover:duration-75 hover:ease-in-out">
            <div className="relative bg-teal-300 h-36  text-center p-2 rounded-lg ">
              <img
                src={menu.url}
                alt="Error"
                className="h-24 rounded-full  w-24 mx-16 "
              />
              <p className="ms-2 my-2 p-1 absolute top-24 text-black rounded-full float-left mb-56 ">
                {menu.category}
                <IoIosStarOutline className="inline ms-1 mb-1 text-red-500" />
              </p>
            </div>

            <h2 className="ms-2 my-2 text-xl font-semibold ">{menu.name}</h2>
            <p className="my-4">
          <span className="text-2xl font-serif ">
            ${Math.floor(menu.price * 0.8)}
          </span>{" "}
          <span className="ml-1 line-through font-serif">${menu.price}</span>
        </p>
          </div>
        );
      })}
    </>
  );
};

export default SectB;
