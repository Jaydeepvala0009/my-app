import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../Assets/JasonFile/index";

const initialState = {
  products: Product,
  filteredProducts: Product,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { category, color, size } = action.payload;
      let filteredProducts = state.products;

      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }
      if (color) {
        filteredProducts = filteredProducts.filter((product) =>
          product.variations.some((variation) => variation.color === color)
        );

        const sizesForSelectedColor = filteredProducts.flatMap((product) =>
          product.variations
            .filter((variation) => variation.color === color)
            .flatMap((variation) => variation.sizes.map((item) => item.size))
        );
        console.log('sizesForSelectedColor: ', sizesForSelectedColor);


        const uniqueAvailableSizesForColor = [
          ...new Set(sizesForSelectedColor),
        ];

        console.log(
          "uniqueAvailableSizesForColor: ",
          uniqueAvailableSizesForColor
        );
      }

      if (size) {
        filteredProducts = filteredProducts.filter((product) =>
          product.variations.some((variation) =>
            variation.sizes.some((item) => item.size === size)
          )
        );
      }

      state.filteredProducts = filteredProducts;
      state.error = false;
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
