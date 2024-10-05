import axios from "axios";
import config from "../config/config";
const getProducts = async () => {
  const response = await axios.get(`${config.baseApiUrl}/api/products`);
  return response;
};
const getProductId = async (id) => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
  return response;
};
export { getProducts,getProductId };


