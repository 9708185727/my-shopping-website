
import { LOGIN_ROUTE } from "../../constants/routes";
import React, { useEffect, useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoLight, PiPerson } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";

import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/Regex";
import {  registerUser } from "../../redux/auth/authActions";
import { MdEmail } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../products/Spinner";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [showpassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState,watch } = useForm();
    const { errors } = formState;
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const password=watch("password")
  
    //   console.log(errors);
    //    const {name,ref,onChange,onBlur}= register("email")
    function submitFormRegister(data) {
      dispatch(registerUser(data));
      
    }
    useEffect(() => {
      toast(error,{
        type:"error",
        autoClose:1500,
      });
    }, [error]);
  return (
    <>
      <form
        onSubmit={handleSubmit(submitFormRegister)}
        className="flex flex-col lg:flex-row h-auto mx-16 p-2 max-w-auto  mt-0 rounded-lg shadow-lg  justify-around "
      >
        <div className="w-96 mt-16  ms-16 text-justify ">
          <h1 className="text-2xl font-bold text-teal-700 my-3">
            Welcome to Shopifiy ! By creating an account, you unlock a world of
            convenience and exclusive benefits:
          </h1>

          <p className="font-serif ">
            Faster Checkout: Save your address and payment details to breeze
            through the checkout process in no time. Exclusive Offers: Enjoy
            access to members-only discounts, promotions, and early access to
            new arrivals. Order Tracking & History: Easily track your orders,
            view past purchases, and manage returns all from your account
            dashboard. Wishlist & Favorites: Save products you love to your
            wishlist and shop whenever you're ready.
          </p>
          <p className="font-serif my-3">
            <span className="text-1xl font-semibold mr-2 "> Sign In</span>
            now to unlock exclusive offers and faster checkout.
          </p>
        </div>

        <div className="p-6 h-auto w-80  item-center  mt-4 lg:ms-36 ms-8  ">
          <div className="text-left mt-5 font-large  text-teal-700 text-3xl">
            Register
          </div>
          <div className="mt-5 relative">
            
            < PiPerson className="absolute top-2.5 left-2 text-black" />
            <input
              type="name"
              {...register("name", {
                required: "Please enter full name",
              
              })}
              placeholder="Enter fulll Name"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.name?.message}</p>
          </div>
          <div className="mt-5 relative">
            <MdEmail className="absolute top-2.5 left-2 text-black" />
            <input
              type="email"
              {...register("email", {
                required: "Please enter valid email",
                pattern: {
                  value: EMAIL_REGEX,
                  message:
                    "Please enter a valid email address (e.g., user@example.com).",
                },
              })}
              placeholder="Enter Email"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.email?.message}</p>
          </div>
          {/* //passowrd */}
          <div className="mt-5 max-w-full relative">
            <RiLockPasswordLine className="absolute top-2 left-2 text-black" />

            <input
              type={showpassword ? "text" : "password"}
              {...register("password", {
                required: "Please enter valid passowrd",
                minLength: {
                  value: 8,
                  message: "password length must be greater than 8",
                },
                pattern: {
                    value: PASSWORD_REGEX,
                    message:
                      "Please enter a valid password (e.g., Test@45678).",
                  },
              })}
              placeholder="Enter Password"
              
              className="p-1 pr-9 pl-8 border-black text-black min-w-full rounded-full border border-2xl "
            />
            <p className="text-red-500 ms-2">{errors.password?.message}</p>
            <div className="mt-5 text-center">
            <div className="mt-5 max-w-full">
              <input
                type="checkbox"
                id="myCheckbox"
                className="text-black"
                name="myCheckbox"
              />
              <p className="text-black inline ml-2 ">I Agree with <span className='text-red-500'>privacy</span>and <span className='text-red-500'>policy</span></p>
             
            </div>
          </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showpassword)}
              className="absolute top-1 right-3 text-teal-500 hover:text-teal-700 hover:cursor-pointer "
            >
              {showpassword ? (
                <FaEye className="mt-1" />
              ) : (
                <IoEyeOffSharp className="mt-1" />
              )}
            </button>
          </div>

          {/* confirmpassword */}
          <div className="mt-5 max-w-full relative">
            <RiLockPasswordLine className="absolute top-2 left-2 text-black" />

            <input
              type={showpassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: " confirm password  is required",
              validate:(value)=>{
                return value===password||"password do not match"
              }
              
              })}
              placeholder="Enter Confirm Password"
              className="p-1 pr-9 pl-8 border-black text-black min-w-full rounded-full border border-2xl "
            />
            <p className="text-red-500 ms-2">{errors.confirmPassword?.message}</p>
            <button
              type="button"
              onClick={() => setShowPassword(!showpassword)}
              className="absolute top-1 right-3 text-teal-500 hover:text-teal-700 hover:cursor-pointer "
            >
              {showpassword ? (
                <FaEye className="mt-1" />
              ) : (
                <IoEyeOffSharp className="mt-1" />
              )}
            </button>
          </div>

          
          <button
            type="submit"
            className="bg-teal-700 rounded-full text-center mt-8 text-white p-1 min-w-full text-md font-medium"
          >
            Register{loading ? <Spinner /> : null}
          </button>

          <div className="mt-8">
            <h1 className="text-center text-black mt-5">Or Sign Up with</h1>
            <div className="text-center mt-5 ">
              <FaFacebook className=" bg-white text-blue-600 inline" />
              <TiSocialTwitter className="ml-2 inline bg-white text-blue-600" />
              <TiSocialSkype className="ml-2 inline bg-white text-red-600 " />
              <PiInstagramLogoLight className="ml-2 inline bg-white text-red-600 " />
            </div>
            <div className="text-1xl mt-5 text-black">
              Don't have an account?
              <Link to={LOGIN_ROUTE}>
                <button
                  type="button"
                  className="text-red-500 ml-5 inline hover:text-red-800 "
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
