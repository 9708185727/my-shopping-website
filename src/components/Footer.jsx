import React from "react";
import { NavLink } from "react-router-dom";

import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import IconHeader from "./IconHeader";
import { ABOUT_ROUTE, HOME_ROUTE } from "../constants/routes";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className=" rounded-lg  ">
        <div className="mx-20  grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 ">
          <div className="ms-2 my-3  max-w-auto max-h-auto  ">
            <IconHeader />
            <p className=" text-sm mt-6 text-justify">
              we offer a curated selection of quality products tailored to meet
              your lifestyle needs. Whether you're shopping for the latest
              trends. 
            </p>
            <p className="mt-2 text-1xl font-semibold">
              Location: Baneshower, Kathamandu
            </p>
          </div>

          <div className="ms-2 my-2 p-2   max-w-auto max-h-auto ">
            <h1 className="my-3 font-semibold text-2xl">Useful Links</h1>
            <ul className="space-y-7 mt-8">
              <NavLink to={ABOUT_ROUTE}>
                <li className="hover:text-slate-500">About Us</li>
              </NavLink>
              <li className="hover:text-slate-500">Events</li>
              <li className="hover:text-slate-500">FQA</li>
            </ul>
          </div>
          <div className="ms-2 my-2 p-2  max-w-auto max-h-auto ">
            <h1 className="my-3 font-semibold text-2xl">Main Menu</h1>
            <ul className="space-y-7 mt-8">
              <NavLink to={HOME_ROUTE}>
                <li className="hover:text-slate-500">Home</li>
              </NavLink>
              <li className="hover:text-slate-500">Menu</li>
              <li className="hover:text-slate-500">Services</li>
            </ul>
          </div>
          <div className="ms-2 my-3 p-2   max-w-auto max-h-auto ">
            <h1 className="my-3 font-semibold text-2xl">Contact Us</h1>
            <ul className="space-y-6 mt-8">
              <li>
                <a href="mailto:Shopifyghar@gmail.com">Shopifyghar@gmail.com</a>
              </li>
              <li>
                {" "}
                <a href="tel:9865809181"> 9865809181</a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/vgrd9YWgUmRUaFBQ6">
                 <CiLocationOn className="inline text-green-700"/> ShopfiyGhar Kathamandu,nepal
                </a>
              </li>

              <div className=" mt-8 ">
                <FaFacebook className=" bg-white text-blue-600 inline" />
                <TiSocialTwitter className="ml-2 inline bg-white text-blue-600" />
                <TiSocialSkype className="ml-2 inline bg-white text-red-600 " />
                <PiInstagramLogoLight className="ml-2 inline bg-white text-red-600 " />
              </div>
            </ul>
          </div>
        </div>
        <footer className="my-2 w-full text-center float-right ">
          &copy;2024. All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default Footer;
