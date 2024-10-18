import React from "react";
import Title from '../Title';
import { Link } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
const Carouseltem = ({name,image}) => {
  return (
    <>
      <div className="grid grid-cols-2 items-center ">
        <Title label={name} className="text-white p-2" />
        <img
          src={image}
          className="w-32 h-36 md:w-56 lg:w-56 lg:h-56 md:h-56 p-1 rounded-full "
        />
     <Link to={PRODUCTS_ROUTE}>
     <button className="py-1 px-3 bg-white rounded-lg text-teal-900 hover:text-teal-600 mb-4">Shop Now</button>
     </Link>
      </div>
    </>
  );
};

export default Carouseltem;
