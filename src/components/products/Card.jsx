import React from "react";
import laptop from "../../assets/images/asus.png";

import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const { id, name, brand, category, price,url} = props;

  return (
    <>
      <div key={id} className="border py-4 px-10 bg-white rounded-xl shadow   relative">
        <p className="mt-2 p-1 absolute float-right top-2 right-3 text-white bg-teal-800 rounded-full">
          {category}
        </p>
        <img src={url??laptop} alt="Error" className="h-60  w-auto "></img>
        <h2 className="mt-4 text-xl font-semibold ">{name}</h2>
        <p className="mt-4">{brand}</p>
        <p className="my-4">
          <span className="text-2xl font-serif ">
            {Math.floor(price * 0.8)}
          </span>{" "}
          <span className="ml-1 line-through font-serif">{price}</span>
        </p>
        <Link to={id}>
          <button className="p-1 pl-2 pr-2 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white">
            Buy Now
          </button>
          </Link>
      
      </div>
    </>
  );
};

export default ProductsCard;
