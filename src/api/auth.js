import axios from "axios";
import config from "../config/config";
const login = async ({email,password}) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`,{
    email,
    password,
  });
  return response;
};
const register = async ({name,address,phone,email,password,confirmPassword}) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/register`,{

    name,
    address,
    phone,
    email,
    password,
    confirmPassword,
  });
  return response;
};
export {login,register}