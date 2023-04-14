import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';
const store = configureStore({
    reducer: {
        productReducer
    },
    devTools: import.meta.env.DEV
})

export default store;