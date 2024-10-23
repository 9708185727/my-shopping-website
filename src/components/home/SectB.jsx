import React, { useState, useEffect } from "react";

import { IoIosStarOutline } from "react-icons/io";

import { getProducts } from "../../api/products";

const SectB = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts({ limit: 8 })
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, []);

  return (
    <>
      {products.map((menu) => {
        return (
          <div
          key={menu._id}
            className="ms-2 my-3 text-center  shadow-lg max-w-auto max-h-auto rounded-lg cursor-pointer hover:scale-105 hover:translate hover:duration-75 hover:ease-in-out"
          >
            <div className="relative bg-teal-300 h-36  mx-10 p-2 rounded-lg ">
              <img
                src={menu.url}
                alt="Error"
                className="h-24 rounded-full  w-24 ms-3 md:ms-16 lg:ms-24  "
              />
              <p className=" my-2 p-1 absolute top-24 text-black rounded-full float-left mb-56 ">
                {menu.category}
                <IoIosStarOutline className="inline ms-1 mb-1 text-red-500" />
              </p>
            </div>

            <h2 className="my-2 text-xl font-semibold ">{menu.name}</h2>
            <p className="my-4 ">
              <span className="text-2xl font-serif ">
                ${Math.floor(menu.price * 0.8)}
              </span>{" "}
              <span className=" line-through font-serif">
                ${menu.price}
              </span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default SectB;
