import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/productSlice';
import cartReducer from './feature/cartSlice';

const store = configureStore({
    reducer:{
        product : productReducer,
        cart : cartReducer
    }
})

export default store;