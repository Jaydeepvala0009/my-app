
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Redux/ProductFilterSlice';
import rootReducer from '../Redux/ProductSlice';
import favoritesReducer from '../Redux/FavSlice';


export default configureStore({
  reducer: {
    reducer: rootReducer,
    products: productReducer,
    favorites: favoritesReducer,

  },
});
