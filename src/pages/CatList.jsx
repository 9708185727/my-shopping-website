import React, { useState, useEffect } from "react";
import NavSec from "../components/home/NavSec"; // Category NavBar
import SectC from "../components/home/SectC";   // Products Section
import { getProducts } from "../api/products";  // API call to get products

const CatList = () => {
  const [products, setProducts] = useState([]);          // Holds product data
  const [filteredProducts, setFilteredProducts] = useState([]); // Holds filtered products
  const [categories, setCategories] = useState([]);      // Unique categories
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category

  // Fetch products on component mount
  useEffect(() => {
    getProducts({ limit: 50 })
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Show all products initially
        const uniqueCategories = [
          "All",
          ...new Set(response.data.map((curElem) => curElem.category)),
         
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Filter products based on the selected category
  const filterData = (category) => {
    setSelectedCategory(category); // Update the selected category
    if (category === "All") {
      setFilteredProducts(products); // Show all products if "All" is selected
    } else {
      const updatedData = products.filter(
        (curElem) => curElem.category === category
      );
      setFilteredProducts(updatedData); // Show filtered products
    }
  };

  return (
    <>
      {/* Category Navigation */}
      <section className="max-w-screen-xl h-auto shadow-black-2xl shadow-lg mt-2">
        <div className="mx-20">
          <NavSec filterData={filterData} categories={categories} />
        </div>
      </section>

      {/* Product Display with Selected Category */}
      <section className="bg-white max-w-screen-xl min-h-96 shadow-black-xl shadow-lg m-0">
        <div className="ms-2 mx-20">
          <SectC MenuData={filteredProducts} selectedCategory={selectedCategory} />
        </div>
      </section>
    </>
  );
};

export default CatList;
