import ProductsForm from "../../components/products/Form";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import Title from '../../components/Title';
import React, { useState ,useEffect} from "react";
import { getProductId } from "../../api/products";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Spinner from "../../components/products/Spinner";

const EditProduct = () => {
    const params=useParams()
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([])
  useEffect(() => {
   
    getProductId(params.id)
      .then((response) => {
        setProduct(response.data);
       
      })
      .catch((error)=>{
    toast(error.response.data,{
        type:'error',
        outoClose:false,
    }) })
    .finally(()=>{
        setLoading(false);
      });
  }, [params.id]);
  return (
    <>
      <div className="mt-10">
        <Link to={PRODUCTS_ROUTE}>
   
        <p className="ms-16 mt-16 shadow-md px-3 py-2   inline">
          <BiLeftArrowAlt className="inline"/> Back
        </p>
      </Link>
      <div className="text-center w-auto ">
     
     <Title label="Edit Product" className=" text-white ml-36 inline me-1 mb-2"/>
      {
        loading?<Spinner />:null
      }
    
      <ProductsForm product={product} />
      </div>
    
    </div>
    </>
  )
}

export default EditProduct
