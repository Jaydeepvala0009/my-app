
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Redux/ProductFilterSlice';
import rootReducer from '../Redux/ProductSlice';


export default configureStore({
  reducer: {
    reducer: rootReducer,
    products: productReducer,
  },
});
