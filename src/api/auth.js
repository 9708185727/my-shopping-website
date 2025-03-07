import axios from "axios";
import config from "../config/config";
const login = async ({email,password}) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`,{
    email,
    password,
  });
  return response;
};
// {name,address,phone,email,image,password,confirmPassword}
const register = async (formData) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/register`,formData,
  {
    headers:{ "Content-Type": "multipart/form-data" }
  }
  );
  return response;
};
const forgotpassword = async ({email}) => {
 
  const response = await axios.post(`${config.baseApiUrl}/api/auth/forgot-password`,{email});
  return response;
};
const resetPassword = async ({token,password}) => {
 
  const response = await axios.post(`${config.baseApiUrl}/api/auth/reset-password`,{token,password});
  return response;
};
export {login,register,forgotpassword,resetPassword}