import React from "react";
import { NavLink } from "react-router-dom";

import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import IconHeader from "./IconHeader";
import { ABOUT_ROUTE, HOME_ROUTE } from "../constants/routes";
const Footer = () => {
  return (
    <>
      <div className="ms-2 my-3 p-2  max-w-auto max-h-auto ">
        <IconHeader />
        <p className=" text-sm mt-6 text-justify">
          we offer a curated selection of quality products tailored to meet your
          lifestyle needs. Whether you're shopping for the latest trends. Our commitment to excellent customer service,
          fast delivery, and competitive pricing makes us for convenient, reliable shopping
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
          <li>Shopifyghar@gmail.com</li>

          <li>9804621925</li>
          <div className=" mt-8 ">
            <FaFacebook className=" bg-white text-blue-600 inline" />
            <TiSocialTwitter className="ml-2 inline bg-white text-blue-600" />
            <TiSocialSkype className="ml-2 inline bg-white text-red-600 " />
            <PiInstagramLogoLight className="ml-2 inline bg-white text-red-600 " />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
