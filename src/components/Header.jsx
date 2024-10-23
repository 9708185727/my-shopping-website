import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { BiLogOut } from "react-icons/bi";
import IconHeader from "./IconHeader";

const Header = () => {
  const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = user ? true : false;
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutUser());
  }
  return (
    <>
      <nav className="bg-white sticky max-w-screen-xl mx-auto px-4 top-0 start-0 border-b  z-20">
        <div className="max-w-screen-xl flex flex-wrap  justify-between mx-10 p-4">
          <IconHeader />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <button
                type="button"
                onClick={logout}
                className="text-teal-700  text-2xl focus:ring-4 focus:outline-none focus:ring-teal-700 font-medium rounded-lg  px-2 py-2 text-center "
              >
                Logout
                <BiLogOut className="inline ml-2" />
              </button>
            ) : null}
            <button
              onClick={() => setMobileMenuHidden(!isMobileMenuHidden)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
