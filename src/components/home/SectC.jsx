import React from "react";
import { IoIosStarOutline } from "react-icons/io";

import { LuBus } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

import Title from "../Title";
const SectC = ({ MenuData, selectedCategory }) => {
  return (
    <>
      <Title
        className="mx-20"
        label={
          selectedCategory === "All" ? "All Products" : ` ${selectedCategory}`
        }
      />
      <div className="mx-16 p-2  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-2 rounded-lg">
        {MenuData.map((menu) => {
          return (
            <div
              key={menu._id}
              className="ms-2 my-3   shadow-lg max-w-auto max-h-auto rounded-lg cursor-pointer hover:scale-105 hover:translate hover:duration-75 hover:ease-in-out"
            >
              <div className="relative bg-teal-300 max-w-24 max-h-24  text-center p-2 rounded-full ">
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
                <span className="ml-1 line-through font-serif">
                  ${menu.price}
                </span>
              </p>
              <p className="text-slate-700 ml-1 my-2 p-1">
                <LuBus className="inline mr-2 text-zinc-900" />
                Free Delivery
              </p>
              <p className=" float-right p-1  text-black  mt-2 mr-2  ">
                {menu.rating}
                <IoIosStarOutline className="inline ms-1 mb-1 text-red-500" />
              </p>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectC;
