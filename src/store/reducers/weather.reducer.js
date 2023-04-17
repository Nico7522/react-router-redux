import { createReducer } from "@reduxjs/toolkit";
import { weatherForecastActionFetch } from "../actions/weather-new.action";

const initialState = {
    result : null,
    loading: false,
    error: null
}

const weatherReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(weatherForecastActionFetch.pending, (state) => {
        state.loading = true;
        state.result = null;
        state.error = null;
    })
    .addCase(weatherForecastActionFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
    })
    .addCase(weatherForecastActionFetch.rejected, (state, action) => {
        state.error = action.payload
    })
})

export default weatherReducer;