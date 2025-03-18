import React from "react";

import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";

const DropDownCart = () => {
  const navigate=useNavigate()
  const { products, totalAmount } = useSelector((state) => state.cart);
  return (
    <>
      <div>
        <div className="h-svh bg-slate-200 opacity-80 min-w-96 p-4  rounded-md shadow-lg">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h1 className="text-center mb-4 text-2xl text-teal-500 underline">
              Product-list
            </h1>
            {/* <button
              onClick={() => setShowCart(false)}
              className="text-center mb-4 text-2xl text-gray-600"
            >
              <MdCancel />
            </button> */}
          </div>
          {products?.length === 0 ? (
            <div className="text-center text-gray-800">
              <h2 className="text-lg text-red-300 font-semibold">
                Cart is Empty !
              </h2>
            </div>
          ) : (
            products?.map((item) => {
              return <CartProduct key={item._id} id={item._id} {...item} />;
            })
          )}
          <h1 className="text-center">
            TotalAmount : {totalAmount}{" "}
            <button onClick={()=>navigate('/payment',{state:{totalAmount:totalAmount}})} className="ml-96 bg-teal-400 rounded-lg shadow-lg px-3 py-2 hover:bg-teal-700">
              Payment
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default DropDownCart;
