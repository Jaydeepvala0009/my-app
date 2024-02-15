
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
      const updatedItems = [...state.items, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    },
    
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
