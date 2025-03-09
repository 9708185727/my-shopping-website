import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from "../../redux/cart/cartSlice";

const CartProduct = ({ id, name, category, quantity = 1 }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="space-y-4 p-2 my-2 w-full">
      <div className="bg-white flex justify-between items-center p-4 shadow-md rounded-lg">
        {/* Product Details */}
        <div className="flex flex-col text-gray-800">
          <h2 className="sn:text-lg sm:text-md md:font-semibold md:text-lg lg:font-semibold">{name}</h2>
          <span className="text-sm text-gray-500">{category}</span>
        </div>

        {/* Quantity Control */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => dispatch(decreaseQuantity(id))} 
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-sm font-medium">{quantity}</span>
          <button 
            onClick={() => dispatch(increaseQuantity(id))} 
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Remove Product Button */}
        <button
          onClick={() => dispatch(removeProductFromCart(id))}
          className="p-2 rounded-full bg-red-100 hover:bg-red-200"
          title="Remove from Cart"
        >
          <MdDelete className="text-red-500 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
