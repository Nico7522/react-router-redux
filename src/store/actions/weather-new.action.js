import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "../../api/weather.api";


export const weatherForecastActionFetch = createAsyncThunk(
    'weather/fetch-forecast',
    async (city) => {
       return await fetchWeatherForecast(city);
    }
)