import React from "react";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import IconHeader from "../components/IconHeader";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="py-12  min-h-[80vh">
        <div className="max-w-screen-xl mx-20 shadow-lg rounded-lg p-4">
          <Title label="About Us" />

          <div className="max-w-screen-xl  grid grid-cols-2   ">
            <div>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">Introduction</h2>
              <p>
                Welcome to <p className="text-1xl font-bold inline">Shopfiy<sub>Ghar</sub></p>, your one-stop destination for all
                your shopping needs. Our mission is to provide a seamless
                shopping experience, offering high-quality products at
                competitive prices.
              </p>
            </div>
            <div>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">Our Mission</h2>
              <p>
                We aim to simplify the shopping process by offering a wide range
                of products that cater to every lifestyle. From the latest
                fashion trends to essential home goods, we ensure fast delivery
                and excellent customer service.
              </p>
            </div>
            <div>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">
                Why Choose Us?
              </h2>
              <ul>
                <li>Vast selection of top-quality products</li>
                <li>Secure and easy payment methods</li>
                <li>Fast shipping and hassle-free returns</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
            <section>
              <h2 className="mt-8 mb-4 text-2xl text-teal-400">
                Our Commitment to You
              </h2>
              <p>
                At <p className="text-1xl font-bold inline">Shopfiy<sub>Ghar</sub></p>, we value our customers and strive to deliver
                an unparalleled shopping experience. We are always here to
                assist you in finding exactly what you need and ensuring your
                satisfaction.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-white max-w-screen-xl h-auto   relative">
        <div className="mx-20 p-2 grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 space-x-14 rounded-lg shadow-lg ">
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default About;
