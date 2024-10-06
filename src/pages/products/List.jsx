import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import ProductsCard from "../../components/products/Card";

import { getProducts } from "../../api/products.js";
import { FaSpinner } from "react-icons/fa";
import ProductsLoader from "../../components/products/Loader.jsx";
const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    
    getProducts()
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error.response.data)
      });
  }, []);
 
  return (
    <>
  
      <section className="py-12 ps-8 pe-8 bg-slate-100">
        <div className="max-w-screen-xl mx-auto px-4"></div>
        <div className=" w-full mx-auto px-4 relative">
          <Title label="New Arrivals" />
         <Link to='add'>
         <button  type="button" className=" float:left ms-12 mb-2 md:absolute top-2 right-12  text-2xl font-semibold text-teal-700 rounded-md bg-white p-1 px-2 cursor-pointer  ">Add Product</button></Link>
        </div>
        {loading?(<ProductsLoader/>):
        (<div className=" grid gap-5 grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-3 ">
          {productList.map((product) => (
            <ProductsCard key={product._id} id={product._id} {...product} />

          ))}
        </div>)}
      </section>
    </>
  );
};

export default ProductList;
