import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import passwordReducer from "./auth/forgotSlice";
import productsReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice.js"
const rootReducer= combineReducers({
    auth: authReducer,
    counter: counterReducer,
    products:productsReducer,
    cart:cartReducer,
    forgotpassword:passwordReducer,
});
export default rootReducer;