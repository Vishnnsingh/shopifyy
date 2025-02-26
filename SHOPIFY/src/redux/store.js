import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice"
const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});

export default store;
