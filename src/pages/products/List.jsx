import React, { useEffect, useState } from "react";

import Title from "../../components/Title";
import ProductsCard from "../../components/products/Card";

import { getProducts } from "../../api/products.js";
import { FaSpinner } from "react-icons/fa";
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
  if(loading) return (<div className="text-center w-full ms-96 mt-2"><FaSpinner/></div>)
  return (
    <>
  
      <section className="py-12 ps-8 pe-8 bg-slate-100">
        <div className="max-w-screen-xl mx-auto px-4"></div>
        <div className="  max-w-screen-xl mx-auto px-4">
          <Title label="New Arrivals" />
        </div>
        <div className=" grid gap-5 grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-3 ">
          {productList.map((product) => (
            <ProductsCard key={product._id} id={product._id} {...product} />

          ))}
        </div>
      </section>
    </>
  );
};

export default ProductList;
