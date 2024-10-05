import React, { useState ,useEffect} from "react";
import { FaCartPlus, FaSpinner } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import laptop from "../../assets/images/asus.png";

import { getProductId } from "../../api/products";
import { useParams } from "react-router";
const ProductDetails = () => {
  const params=useParams()
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([])
  useEffect(() => {
   
    getProductId(params.id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error.response.data)
      });
  }, []);
  if(loading) return (<div className="text-center w-full ms-96 mt-2"><FaSpinner/></div>)
  return (

    <>
     
          <section className="py-12 ps-8 pe-8" >
            <div className="mt-4 mx-10 max-w-full h-1/2   flex-col md:flex-row flex flex-justify-between items-center justify-around ">
              <img src={product.url??laptop} alt="error" className=" block max-w-full max-h-[395px] " />

              <div className=" w-1/2 p-4 shadow-2xl ">
                <p className="mt-4  text-white bg-teal-800 rounded-full inline-block px-4">
                  {product.category}
                </p>
                <p className="flex flex-justify my-2 text-yellow-600">
                  {" "}
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                </p>
                <h2 className="mt-4 text-2xl font-semibold ">{product.name}</h2>
                <p className="text-black my-4">
                  Lorem ipsum dolor quaerat unde, praesentium enim nesciunt,
                  dicta debitis quibusdam perferendis consectetur veniam
                  consequatur obcaecati numquam cum modi minima. Sed, eius!
                  Quidem pariatur, assumenda corporis soluta aliquid illo
                  molestias!
                </p>
                <p className="my-2 text-2xl ">{product.brand}</p>
                <p className="my-2">
                  <span className="text-2xl font-serif ">
                   {` ${Math.floor(product.price* 0.8)}`}
                  </span>
                  <span className="ml-1 line-through font-serif inline-block">
                    {product.price}
                  </span>
                </p>
                <button className=" block px-3 py-2 mt-4 bg-teal-800 text-xl text-white-700 rounded text-white hover:bg-teal-500">
                  Add to Cart
                  <FaCartPlus className="inline ml-2" />
                </button>
              </div>
            </div>
          </section>
      
    </>
  );
};

export default ProductDetails;
