import React from "react";
import { useWeather } from "../../context/WeatherContext";
import "./style.css";

const WeatherMenu = () => {
  const { weather, city, days } = useWeather();

  console.log(weather);

  return (
    <div className="card-container">
      <span>{city.name}</span>
      {weather &&
        weather.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="day-title">
                {days[new Date(item.dt * 1000).getDay()]}
              </div>
              <div>{item.weather[0].main}</div>

              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt=""
              />
              <div>Min:{Math.round(item.temp.max)}°C</div>
              <div>Max:{Math.round(item.temp.min)}°C</div>
            </div>
          );
        })}
    </div>
  );
};

export default WeatherMenu;
