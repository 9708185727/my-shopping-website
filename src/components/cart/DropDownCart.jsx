import React from "react";

import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

import { MdCancel } from "react-icons/md";

const DropDownCart = ({ showcart, setShowCart }) => {
  const { products } = useSelector((state) => state.cart);
  return (
    <>
      <div className={`${showcart ? "block" : "hidden"} relative `}>
        <div className=" bg-slate-200 opacity-80 min-w-96 p-4 absolute -left-64 top-60 md:-top-6 lg:-top-6 md:left=48 lg:left-48  z-50 rounded-md shadow-lg">
          <div className="flex justify-between">
            {" "}
            <h1 className="text-center mb-4 text-2xl text-teal-500 ">
              Product-Cart-list
            </h1>
            <button
              onClick={() => setShowCart(false)}
              className="text-center mb-4 text-2xl text-gray-600"
            >
              <MdCancel />
            </button>
          </div>
          {products.length === 0 ? (
            <div className="text-center text-gray-800">
              <h2 className="text-lg text-red-300 font-semibold">
                Cart is Empty !
              </h2>
            </div>
          ) : (
            products.map((item) => {
              return <CartProduct key={item._id} id={item._id} {...item} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default DropDownCart;
