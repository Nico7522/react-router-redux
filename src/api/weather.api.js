import axios from 'axios'

const URL_WEATHER_FORECAST = "https://api.openweathermap.org/data/2.5/forecast"
const WEATHER_API_KEY = "72b1830e6bd1df9d301781d068217f37"

export const fetchWeatherForecast = (city) => {
    return axios.get(URL_WEATHER_FORECAST, {
        params: {
            appid: WEATHER_API_KEY,
            q: city,
            units: 'metric',
            lang: 'fr',
            cnt: 5
        }
    })
    .then(({ data }) => {
        return {
            city: data.city.name,
            country: data.city.country,
            count: data.cnt,
            data: data.list.map(item => ({
                temp: item.main.temp,
                tempFeelsLike: item.main.feels_like,
                weatherDescription: item.weather[0].description,
                weatherIconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                probaPrecipitation: item.pop,
                isDay: item.sys.pod === "d",
                time: item.dt_txt
            }))
        }
    })
}

