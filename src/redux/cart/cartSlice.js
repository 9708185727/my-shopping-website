import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    AddProductToCart: (state, action) => {
      const existingItem = state.products.find(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existingItem) {
    
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add it with a quantity of 1
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveProductFromCart: (state, action) => {
       state.products=state.products.filter((item)=>item._id!=action.payload)
    },
  
  },
});
export const { AddProductToCart, RemoveProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
