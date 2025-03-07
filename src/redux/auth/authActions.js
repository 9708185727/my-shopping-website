import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotpassword, login, register } from "../../api/auth";
const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("authToken",response.data?.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
const registerUser = createAsyncThunk(
  "auth/register",
  async (formData,{rejectWithValue}) => {
    try {
      const response = await register(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
const forgotUserPassword=createAsyncThunk("/forgot-password",async (data,{rejectWithValue})=>{
try {
  const response= await forgotpassword(data)
  return response.data;
} catch (error) {
  return rejectWithValue(error.response?.data);
}
})
export { loginUser, registerUser,forgotUserPassword };
