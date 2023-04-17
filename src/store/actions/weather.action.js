import { createAction } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "../../api/weather.api";
import { useDispatch } from "react-redux";

// Gestion de la requête "à l'ancienne" => sans le "createAsyncThunk"
export const weatherForecastActionPending = createAction('weather/fetch-forecast/pending');
export const weatherForecastActionFulfilled = createAction('weather/fetch-forecast/fulfilled');
export const weatherForecastActionRejected = createAction('weather/fetch-forecast/rejected');

export const weatherForecastActionFetch = (city) => {
    const dispatch = useDispatch()

    return async (dispatch) => {
            dispatch(weatherForecastActionPending());
        try {
            const response = await fetchWeatherForecast(city)
            dispatch(weatherForecastActionFulfilled(response))
            
        } catch (error) {
            dispatch(weatherForecastActionRejected(error))
        }
    }
}