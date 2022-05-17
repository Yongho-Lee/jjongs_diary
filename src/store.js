import { configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice';
import product from './store/productSlice';


export default configureStore({
    reducer: {
        product : product.reducer,
        user: user.reducer
    }
})