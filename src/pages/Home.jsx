import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import SectA from "../components/home/SectA";
import SectB from "../components/home/SectB";


import { FaLongArrowAltRight } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "../constants/routes";
import { Link } from "react-router-dom";

import CatList from "./CatList";

const Home = () => {
  return (
    <>
      <section className=" max-w-screen-xl h-70  lg:flex justify-between sm:flex row-span-1 shadow-lg shadow-black  ">
        <div className="p-4 mx-12 max-w-96 mt-5  py-6 ">
          <h1 className=" text-3xl font-semibold">
            Dive Into Valuable Products{" "}
            <span className="text-teal-500 text-3xl font-semibold">Items</span>
          </h1>
          <p className="text-black mt-5 ">
            Where Each Shopping items gives you Satisfication with good
            delivery, valuable and realiable products
          </p>
          <Link to={PRODUCTS_ROUTE}>
            <button className="mt-5 bg-teal-500 px-3 py-2 rounded-2xl text-white">
              Order Now
            </button>
          </Link>
        </div>
        <div className="mt-5 pb-5  ">
          <SectA />
        </div>
      </section>

      <section className="bg-white max-w-screen-xl h-auto shadow-black-2xl shadow-lg rounded-lg">
        <div className="mx-16 p-2">
          <Title label="Our Products" className="text-2xl font-semibold" />
        </div>
        <div className="mx-16 p-2 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-2 rounded-lg">
          <SectB />
        </div>
      </section>

      <section className="bg-white max-w-screen-xl h-auto shadow-black-2xl shadow-lg relative">
        <div className="mx-16 p-2">
          <Title
            label=" Categories Product"
            className="text-2xl font-semibold"
          />


          <Link to={PRODUCTS_ROUTE}>
            {" "}
            <p className="inline text-black text-md absolute top-2 right-14 mx-14">
              See More <FaLongArrowAltRight className="text-green-500 inline" />
            </p>
          </Link>
        </div>

        <CatList/>
      </section>
      <section className="bg-white max-w-screen-xl h-auto relative">
        <Footer />
      </section>
    </>
  );
};

export default Home;
