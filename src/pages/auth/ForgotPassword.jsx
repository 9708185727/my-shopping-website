import React from "react";
import { useForm } from "react-hook-form";
import { forgotpassword } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { forgotUserPassword } from "../../redux/auth/authActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
 const navigate=useNavigate()
  const {resetUrl}=useSelector((state)=>state.forgotpassword)
  

 const url=resetUrl?.ResetLink
  const dispatch=useDispatch()
  const onSubmit = async (data) => {
    console.log(data)
   try {
     dispatch(forgotUserPassword(data))
    toast.success("ResetLink is sent Successfully")

   } catch (error) {
    console.log(error)
   }
    // try {
    //   await forgotpassword(data).then((response)=>{
    //     console.log(response)
            
      
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="border text-center space-x-2 space-y-3 py-3">
        <label htmlFor="email" className="">Email</label>
        <input type="email"  className="border border-black rounded-sm p-2 focus:outline-none" {...register("email",{required:"email is required"})} />
        <p>{errors.email?.message}</p>
     
   {url? <Link to={url}><button className="bg-blue-600 px-3 py-2 rounded-md">GoToReset</button></Link>:   <button type="submit" className="bg-blue-600 px-3 py-2 rounded-md">submit</button>}
      </form>
    </>
  );
};

export default ForgotPassword;
