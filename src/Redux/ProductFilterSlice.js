import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../Assets/JasonFile/index";

const initialState = {
  products: Product,
  filteredProducts: Product,
  availableSizes: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { category } = action.payload;

      let filteredProducts = state.products;

      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }

      state.filteredProducts = filteredProducts;
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
