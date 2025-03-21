import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import DropDownCart from "./cart/DropDownCart";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { BiLogOut } from "react-icons/bi";
import IconHeader from "./IconHeader";
import { FaCartShopping, FaPerson } from "react-icons/fa6";
import UploadImage from "../pages/auth/UploadImage";
import Users from "../pages/auth/UploadImage";

const Header = () => {
  const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
  const [isProfile, setProfile] = useState(true);
  const [showcart,setShowCart]=useState(false)
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = user ? true : false;
  
 
  return (
    <>
      <nav className="bg-white sticky max-w-screen-xl mx-auto px-4 top-0 start-0 border-b  z-20">
        <div className="max-w-screen-xl flex flex-wrap  justify-between mx-10 p-4">
          <IconHeader />
          {/* {isAuthenticated?<div className="ml-0">
               <button onClick={()=>setShowCart(!showcart)}>
                    <FaCartShopping className=" mt-3 text-xl text-teal-400 "/>
                  
                  </button>
                  <DropDownCart showcart={showcart} setShowCart={setShowCart}/>
               </div>:null} */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
         
            {user ? (
              
                <div className="relative">
                  <button onClick={()=>setProfile(!isProfile)}> <FaPerson className={`bg-teal-500 rounded-full w-8 h-8 mr-2 mt-2 ${isProfile?"":"hidden"}`}/>
           
            
            
           </button>
            <div className="absolute top-2 right-1">
            <Users isProfile={isProfile} setProfile={setProfile} />
            </div>
                </div>
            ) : null}
               
            <button
              onClick={() => setMobileMenuHidden(!isMobileMenuHidden)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuHidden ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              {navMenu
                .filter((menu) => menu.auth === isAuthenticated)
                .map((navlist, index) => {
                  return (
                    <NavLink to={navlist.route} key={index}>
                      {({ isActive }) => {
                        return (
                          <li
                            className={`block py-2 px-3 rounded ${
                              isActive ? "bg-teal-700 text-white" : ""
                            }`}
                            aria-current="page"
                          >
                            {navlist.label}
                          </li>
                        );
                      }}
                    </NavLink>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
