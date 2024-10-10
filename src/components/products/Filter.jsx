import React from "react";
import {
  setFilters,
  setLimit,
  setSort,
} from "../../redux/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductsFilter = () => {
  const { categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  function setProductLimit(limit) {
    console.log(limit);
    dispatch(setLimit(parseInt(limit)));
  }
  function sortProducts(sort) {
    console.log(sort);
    dispatch(setSort(sort));
  }
  function filterByName(value) {
    console.log(value);
    dispatch(setFilters({ name: value }));
  }
  function filterByCategory(value) {
    console.log(value);
    dispatch(setFilters({ category: value }));
  }
  return (
    <>
      <div className="mx-10 px-1 py-3 bg-white mb-5 mx-10m rounded-lg grid items-center md:grid-cols-2  xl:grid-cols-[1fr,1fr,1fr,auto] gap-3 justify-stretch ">
        <div className="mx-auto">
          <label htmlFor="name" className="font-semibold">
            Name :
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => filterByName(e.target.value)}
            className="ms-2 border border-black-lg border-md"
          />
        </div>
        <div className="mx-auto">
          <label htmlFor="category" className="font-semibold">
            Category :
          </label>
          <select
            type="text"
            id="category"
            className="ms-2 border border-black-lg border-md"
            onChange={(e) => {
              filterByCategory(e.target.value);
            }}
          >
            <option value="" selected>
              Select Category
            </option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-auto">
          <label htmlFor="short" className="font-semibold">
            Short :
          </label>
          <select
            type="text"
            id="short"
            onChange={(e) => {
              sortProducts(e.target.value);
            }}
            className="ms-2 border border-black-lg border-md"
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price : Low to High
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price : High to Low
            </option>
          </select>
        </div>

        <div className="mx-auto">
          <label htmlFor="Limit" className="font-semibold">
            Limit :
          </label>
          <select
            type="text"
            id="Limit "
            className="ms-2 border border-black-lg border-md"
            onChange={(e) => {
              setProductLimit(e.target.value);
            }}
          >
            {" "}
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
