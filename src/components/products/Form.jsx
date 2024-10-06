import React from "react";
import { addProduct, editProduct } from "../../api/products";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import Spinner from "./Spinner";
import { useState } from "react";
const ProductsForm = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: product ?? {},
    values: product,
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const isEditing = product ? true : false;
  async function submitForm(data) {
    setLoading(true);
    if(!data.url) delete data.url
    try {
      if (isEditing) {
        await editProduct(product._id, data);
      } else {
        await addProduct(data);
      }
      toast(`Product ${isEditing ? "Updated" : "Added"} Successfully`, {
        type: "success",
        autoClose: 1500,
      });

      navigate(PRODUCTS_ROUTE);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      toast(error.response.data, {
        type: "error",
        autoClose: 1500,
      });
      setLoading(false);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col lg:flex-row h-auto mx-16 p-2 max-w-auto  mt-0  justify-around text-center "
      >
        <div className="p-6 h-auto w-96 item-center  mt-0 lg:ms-28 ms-8 shadow-lg  ">
          <div className="mt-5 relative">
            <input
              type="text"
              {...register("name", {
                required: "please enter product name",
              })}
              placeholder="Enter product name"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.name?.message}</p>
          </div>

          <div className="mt-5 relative">
            <input
              type="text"
              {...register("brand", {
                required: "Please Enter brand name ",
              })}
              placeholder="Enter product brand"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.brand?.message}</p>
          </div>
          <div className="mt-5 relative">
            <input
              type="text"
              {...register("category", {
                required: "Please enter category name ",
              })}
              placeholder="Enter product category"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.category?.message}</p>
          </div>
          <div className="mt-5 relative">
            <input
              type="number"
              {...register("price", {
                required: "Please enter product price ",
                min: {
                  value: 0,
                  message: "Price should be positive number",
                },
              })}
              placeholder="Enter product price "
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.price?.message}</p>
          </div>
          <div className="mt-5 relative">
            <input
              type="url"
              {...register("url", {
                required: "Please enter  imagr url ",
              })}
              placeholder="Insert image url"
              className="p-1 pr-9 pl-8 text-black min-w-full rounded-full border border-2xl  border-black"
            />
            <p className="text-red-500 ms-2">{errors.url?.message}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-700 rounded-full text-center mt-8 text-white p-1 min-w-full text-md font-medium disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isEditing ? "Edit Product" : "Add Product"}
            {loading ? <Spinner /> : null}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductsForm;
