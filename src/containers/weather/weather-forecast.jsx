import { useSelector } from "react-redux";
import mockup from "./data-mockup.json";
import style from "./weather.module.css";
import clsx from 'clsx'
const WeatherForecastItem = ({
  temp,
  tempFeelsLike,
  weatherDescription,
  weatherIconUrl,
  probaPrecipitation,
  isDay,
  time,
}) => {

const stylet = clsx(style['weather-item'], isDay ? style['weather-day'] : style['weather-night'])
return (
    <li className={stylet}>
      <p>{time}</p>
    <img
      src={weatherIconUrl}
      alt={weatherDescription}
      title={weatherDescription}
    />
    <p>
      Temp : {temp}°C <br />Ressenti : {tempFeelsLike}°C
    </p>
    {probaPrecipitation > 0.5 && <p>Risque de pluie ! </p>}
  </li>
)};

const WeatherForecast = () => {
  const {loading, result, error} = useSelector(state => state.weather)
 
  if (loading) {
    return (
      <div>
        <p className={style['weather-title']}>Chargement...</p>
      </div>
    )
  };

  if (error) {
    return (
      <div>
        <p className={style['weather-title']}>Error</p>
      </div>
    )
  }

  if(!result) {
    return (
      <div>
        <p>Aucune data ! </p>
      </div>
    )
  }
  return (
    <div>
      <p className={style['weather-title']}>
        Météo de la ville : "{result.city}" ({result.country})
      </p>
      <ul className={style['weather-results']}>
        {result.data.map(weather => (
            <WeatherForecastItem {...weather} key={weather.time} />

        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
