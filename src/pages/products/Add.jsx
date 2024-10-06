import React ,{useState} from "react";
import ProductsForm from "../../components/products/Form";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import Spinner from "../../components/products/Spinner";
import Title from "../../components/Title";

const AddProduct = () => {
 
  
  return (
    <>
    <div className="mt-10">
    <Link to={PRODUCTS_ROUTE}>
        <p className="ms-16 mt-16 shadow-md px-3 py-2   inline">
          <BiLeftArrowAlt className="inline" /> Back
        </p>
      </Link>
      <div className="text-center w-auto">
        <Title label='Add Product' className="text-white ml-36"/>
      
      <ProductsForm />
      </div>
     

    </div>
    </>
  );
};

export default AddProduct;
