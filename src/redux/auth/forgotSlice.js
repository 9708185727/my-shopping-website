import { createSlice } from "@reduxjs/toolkit";
import { forgotUserPassword } from "./authActions";

const forgotSlice=createSlice({
    name:"forgotpassword",
    initialState:{
        resetUrl:null,
        error:null,
        loading:null,
    },
    extraReducers:(builder) =>{
        builder
          .addCase(forgotUserPassword.pending, (state) => {
            state.loading = true;
            state.error=null;
          })
          .addCase(forgotUserPassword.fulfilled, (state, action) => {
            state.resetUrl = action.payload;
            state.loading=false;
          })
          .addCase(forgotUserPassword.rejected, (state, action) => {
            state.error = action.payload;
            state.loading=false;
          })
        }
})

export default forgotSlice.reducer