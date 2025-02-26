import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk("products/fetchCategories", async () => {
  const response = await axios.get("https://fakestoreapi.com/products/categories");
  return response.data;
});

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (category) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response.data;
});

export const fetchProductDetails = createAsyncThunk("products/fetchProductDetails", async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    products: [],
    selectedProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export default productSlice.reducer;
