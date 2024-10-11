import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductCategories } from "./productActions";
const initailQueryState={
  filters:{
    name:"",
    category:"",


  },
  sort:JSON.stringify({createdAt:-1}),
  limit:10
}
const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    products: [],
    categories: [],
    query:initailQueryState,
  },
  reducers: {
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },
    setSort: (state, action) => {
      state.query.sort = action.payload;
    },
    setFilters: (state, action) => {
      state.query.filters = {...state.query.filters,...action.payload};
    },
    resetQuery:(state)=>{
      state.query=initailQueryState;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(getProductCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setLimit,setSort ,setFilters,resetQuery} = productSlice.actions;
export default productSlice.reducer;
