import React from "react";
import { useWeather } from "../../context/WeatherContext";
import "./style.scss";

const Day = ({ item }) => {
  const { days } = useWeather();

  return (
    <div className="card">
      <div className="day-title">{days[new Date(item.dt * 1000).getDay()]}</div>
      <div>{item.weather[0].main}</div>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
      />
      <span className="max">{Math.round(item.temp.max)}°C</span>
      <span className="min">{Math.round(item.temp.min)}°C</span>
    </div>
  );
};

export default Day;
