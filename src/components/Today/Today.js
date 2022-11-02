import React from "react";
import { useWeather } from "../../context/WeatherContext";
import "./style.css";

const Today = () => {
  const { today, city, days } = useWeather();

  return (
    <div className="today-container">
      <h1>Today Highlights</h1>
      <div className="detail">
        <span>{city.name}</span>
        <span>{days[new Date(today.dt * 1000).getDay()]}</span>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${today?.weather?.[0]?.icon}@4x.png`}
        alt=""
      />
      <div  className="detail">
        <span>{today && Math.round(today.temp)} °C</span>
        <span>{today?.weather?.[0]?.main}</span>
      </div>
      <span>
        <p>Humidity: {today && today.humidity}%</p>
        <p>Wind: {today && Math.round(today.wind_speed)} km/h</p>
      </span>
    </div>
  );
};

export default Today;
