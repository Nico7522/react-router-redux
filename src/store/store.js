import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';
import productReducerImmer from './reducers/product-immer.reducer';
import loggerMiddleware from 'redux-logger';
import weatherReducer from './reducers/weather.reducer';

const store = configureStore({
    reducer: {
        product: productReducerImmer,
        weather: weatherReducer
    },
    devTools: import.meta.env.DEV,

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        loggerMiddleware
    ]
})

export default store;