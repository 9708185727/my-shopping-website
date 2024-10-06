import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    products: [],
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading=true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading=false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading=false;
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;