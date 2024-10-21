import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import ProductsCard from "../../components/products/Card";
import ProductsLoader from "../../components/products/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import ProductsFilter from "../../components/products/Filter.jsx";
import {
  getAllProducts,
  getProductCategories,
} from "../../redux/products/productActions.js";
import { resetQuery } from "../../redux/products/productSlice.js";
const ProductList = () => {
  const { loading, products, query } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  function resetFilterQuery() {
    dispatch(resetQuery());
  }

  useEffect(() => {
    dispatch(getAllProducts(query));
    dispatch(getProductCategories());

    //  getProducts()
    //     .then((response) => {
    //       setProductList(response.data);
    //       setLoading(false);
    //     })
    //     .catch((error)=>{
    //       console.log(error.response.data)
    //     });
  }, [dispatch, query]);

  return (
    <>
      <section className="py-12 ps-8 pe-10 bg-slate-100 min-h-svh">
        <div className="max-w-screen-xl mx-auto px-1">
          <ProductsFilter />
          <div className=" w-full mx-auto px-4 relative">
            <Title label="New Arrivals" className="ml-8" />
            <div>
              <button
                type="button"
                onClick={resetFilterQuery}
                className=" float:left ms-12 mb-2 md:absolute top-2 right-44  text-1xl font-semibold text-teal-700 rounded-md bg-white p-1 px-2 cursor-pointer  "
              >
                Reset Filter
              </button>
              <Link to="add">
                <button
                  type="button"
                  className=" float:left ms-12 mb-2 md:absolute top-2 right-10  text-1xl font-semibold text-teal-700 rounded-md bg-white p-1 px-2 cursor-pointer  "
                >
                  Add Product
                </button>
              </Link>
            </div>
          </div>
          {loading ? (
            <ProductsLoader />
          ) :   products.length == 0 ? (
            <h2 className="w-full  mt-24 text-center justify text-red-500">
              Product not found 
            </h2>
          ) : (
            <div className=" grid gap-5 grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-3 ">
            {
                products.map((product) => (
                  <ProductsCard
                    key={product._id}
                    id={product._id}
                    {...product}
                  />
                ))}
              
            </div>
          )
          
          }
        </div>
      </section>
    </>
  );
};

export default ProductList;
