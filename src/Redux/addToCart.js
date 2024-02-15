
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const updatedItems = [...state.items, newItem]; // Create a new array with the new item added
      localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update localStorage
      return { ...state, items: updatedItems }; // Return the updated state
    },
    
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
