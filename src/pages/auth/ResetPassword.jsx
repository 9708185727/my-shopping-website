import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { PASSWORD_REGEX } from "../../constants/Regex";
import { IoEyeOffSharp } from "react-icons/io5";
import { resetPassword } from "../../api/auth";
import { LOGIN_ROUTE } from "../../constants/routes";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [showpassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const [resetToken, setResetToken] = useState("");
  const { search } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      setResetToken(token);
      console.log(token);
    } else {
      alert("token is not found");
    }
  },[search]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await resetPassword({token:resetToken,password:data.password})
        .then((response) => {
          console.log(response.data);
          toast.success("Password Reset Succefully")
          navigate(LOGIN_ROUTE)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col items-center  justify-center w-max   p-2  max-w-screen-xl   rounded-lg ">
        <div className="mt-5 max-w-full relative">
          <RiLockPasswordLine className="absolute top-2 left-2 text-black" />

          <input
            type={showpassword ? "text" : "password"}
            {...register("password", {
              required: "Please enter valid passowrd",
              minLength: {
                value: 8,
                message: "new password length must be greater than 8",
              },
              pattern: {
                value: PASSWORD_REGEX,

                message: "Please enter a valid password (e.g., Test@45678).",
              },
            })}
            placeholder="Enter new Password"
            className="p-1 pr-9 pl-8 border-black text-black min-w-full rounded-full border border-2xl "
          />
          <p className="text-red-500 ms-2">{errors.password?.message}</p>

          <button
            type="button"
            onClick={() => setShowPassword(!showpassword)}
            className="absolute top-1 right-[2px] md:right-3 lg:right-3 text-teal-500 hover:text-teal-700 hover:cursor-pointer "
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
              validate: (value) => {
                return value === password || "password do not match";
              },
            })}
            placeholder="Confirm Password"
            className="p-1 pr-9 pl-8 border-black text-black min-w-full rounded-full border border-2xl "
          />
          <p className="text-red-500 ms-2">{errors.confirmPassword?.message}</p>
          <button
            type="button"
            onClick={() => setShowPassword(!showpassword)}
            className="absolute top-1 right-[1px] md:right-3 lg:right-3 text-teal-500 hover:text-teal-700 hover:cursor-pointer "
          >
            {showpassword ? (
              <FaEye className="mt-1" />
            ) : (
              <IoEyeOffSharp className="mt-1" />
            )}
          </button>
        </div>

        <button
          type="submit "
          className=" inline hover:text-red-800 px-3 py-2 bg-blue-500 rounded-lg mt-4"
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
