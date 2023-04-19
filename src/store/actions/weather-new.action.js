import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "../../api/weather.api";


export const weatherForecastActionFetch = createAsyncThunk(
    'weather/fetch-forecast',
    async (city) => {
       return await fetchWeatherForecast(city);
    }
);

export const weatherForecastActionReload = createAsyncThunk(
    'weather/reload',
    async(arg, thunkAPI) => {
        const city = thunkAPI.getState().weather?.result?.city

        if (city) {
            thunkAPI.dispatch(weatherForecastActionFetch(city))
        }
    } 
)