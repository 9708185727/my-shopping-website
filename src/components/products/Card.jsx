import React from "react";
import laptop from "../../assets/images/asus.png";

import { Link } from "react-router-dom";
import {  FaPencil, FaTrash } from "react-icons/fa6";
import { deleteProduct } from "../../api/products";

const ProductsCard = (props) => {
  const { id, name, brand, category, price, url } = props;
  async function removeProduct() {
    await deleteProduct(id)
    
  }

  return (
    <>
      <div
        key={id}
        className="border py-4 px-10 bg-white rounded-xl shadow   relative"
      >
        <p className="mt-2 p-1 absolute float-right top-2 right-3 text-white bg-teal-800 rounded-full">
          {category}
        </p>
        <img src={url ?? laptop} alt="Error" className="h-60  w-auto "></img>
        <h2 className="mt-4 text-xl font-semibold ">{name}</h2>
        <p className="mt-4">{brand}</p>
        <p className="my-4">
          <span className="text-2xl font-serif ">
            {Math.floor(price * 0.8)}
          </span>{" "}
          <span className="ml-1 line-through font-serif">{price}</span>
        </p>
        <div className="flex justify-between">
          <Link to={id}>
            <button className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white">
              Buy Now
            </button>
          </Link>
          
            <div className="flex space-x-2">
            <Link to={`edit/${id}`} className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white">
              <FaPencil className="mt-1"/>
            </Link>
          
          <button onClick={removeProduct} className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white">
              <FaTrash />
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;