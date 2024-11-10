import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import orderReducer from './features/orderSlice';
import profileReducer from './features/profileSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        products: productReducer,
        cart: cartReducer,
        orders: orderReducer
    },
});

export default store;
