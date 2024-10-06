import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import ProductsCard from "../../components/products/Card";

import ProductsLoader from "../../components/products/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/productActions.js";
const ProductList = () => {
  const {loading,error,products}=useSelector((state)=>state.products)
 console.log(products)
  const dispatch=useDispatch();
  useEffect(() => {
   
   dispatch(getAllProducts())
  //  getProducts()
  //     .then((response) => {
  //       setProductList(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error)=>{
  //       console.log(error.response.data)
  //     });
  }, [dispatch]);
 
  return (
    <>
  
      <section className="py-12 ps-8 pe-8 bg-slate-100">
        <div className="max-w-screen-xl mx-auto px-4"></div>
        <div className=" w-full mx-auto px-4 relative">
          <Title label="New Arrivals" className="ml-8"/>
         <Link to='add'>
         <button  type="button" className=" float:left ms-12 mb-2 md:absolute top-2 right-12  text-2xl font-semibold text-teal-700 rounded-md bg-white p-1 px-2 cursor-pointer  ">Add Product</button></Link>
        </div>
        {loading?(<ProductsLoader/>):
        (<div className=" grid gap-5 grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <ProductsCard key={product._id} id={product._id} {...product} />

          ))}
        </div>)}
      </section>
    </>
  );
};

export default ProductList;
