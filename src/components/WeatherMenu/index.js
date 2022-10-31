import React from "react";
import { useWeather } from "../../context/WeatherContext";
import Day from "../Day";
import "./style.css";

const WeatherMenu = () => {
  const { weather,today } = useWeather();


  return (
    <div className="card-container">
      {weather && weather.map((item, index) => <Day item={item} key={index} />)}
    </div>
  );
};

export default WeatherMenu;
