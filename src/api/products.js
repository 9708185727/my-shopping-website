import axios from "axios";
import config from "../config/config";
const authToken = localStorage.getItem("authToken");
const getProducts = async () => {
  const response = await axios.get(`${config.baseApiUrl}/api/products`);
  return response;
};
const getProductId = async (id) => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
  return response;
};
const addProduct = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/products`, data, {
    headers: {
      Authorization:`Bearer ${authToken}`,
    }
  });
  return response;
};
const editProduct = async (id,data) => {
  const response = await axios.put(`${config.baseApiUrl}/api/products/${id}`, data, {
    headers: {
      Authorization:`Bearer ${authToken}`,
    }
  });
  return response;
};
const deleteProduct = async (id) => {
  const response = await axios.delete(`${config.baseApiUrl}/api/products/${id}`, {
    headers: {
      Authorization:`Bearer ${authToken}`,
    }
  });
  return response;
};
export { getProducts, getProductId, addProduct ,editProduct,deleteProduct};
