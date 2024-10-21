import React from "react";
import { useState } from "react";
import imagePlaceHolder from "../../assets/images/imgplaceholder.png";
import Modal from "./Modal";

import { Link } from "react-router-dom";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteProduct } from "../../api/products";
import { getAllProducts } from "../../redux/products/productActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductsCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, name, brand,description, category, price, url } = props;
  
  const dispatch = useDispatch();

  async function removeProduct() {
    setIsOpen(true);
  }
  async function confirmDelete() {
    try {
      await deleteProduct(id);
      dispatch(getAllProducts({}));
      toast(`product ${name} deleted successfully`, {
        type: "success",
        outoClose: 1500,
      });
    } catch (error) {
      toast(error.response.data, {
        type: "error",
        outoClose: false,
      });
    } finally {
      setIsOpen(false);
    }
  }
  return (
    <>
      <div
        key={id}
        className="border py-4 px-10 bg-white rounded-xl shadow   relative"
      >
        <p className="mt-2 p-1 absolute float-right top-2 right-3 text-white bg-teal-800 rounded-full">
          {category}
        </p>
        <Link to={id}>
          <img
            src={url ?? imagePlaceHolder}
            alt="Error"
            className="h-60  w-auto "
          />
        </Link>
        <h2 className="mt-4 text-xl font-semibold ">{name}</h2>
        <p className="mt-4">{brand}</p>
        <p className="mt-4 text-justify">{description}</p>
        <p className="mt-9">
          <span className="text-2xl font-serif ">
            ${Math.floor(price * 0.8)}
          </span>{" "}
          <span className="ml-1 line-through font-serif">${price}</span>
        </p>
        <div className="flex justify-between  mt-4">
          <Link to={id}>
            <button className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white">
              Buy Now
            </button>
          </Link>

          <div className="flex space-x-2">
            <Link
              to={`edit/${id}`}
              className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white"
            >
              <FaPencil className="mt-1" />
            </Link>

            <button
              onClick={removeProduct}
              className="px-2 py-1 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete Product"
        body={<p>Are you sure you want to delete this product?</p>}
        actions={
          <button className="bg-red-500 text-white" onClick={confirmDelete}>
            Confirm
          </button>
        }
      />
    </>
  );
};

export default ProductsCard;
