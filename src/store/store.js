import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';
import productReducerImmer from './reducers/product-immer.reducer';
import loggerMiddleware from 'redux-logger';
import weatherReducer from './reducers/weather.reducer';
import progressReducer from './reducers/progress.reducer';

const store = configureStore({
    reducer: {
        product: productReducerImmer,
        weather: weatherReducer,
        progress: progressReducer
    },
    devTools: import.meta.env.DEV,

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        loggerMiddleware
    ]
})

export default store;