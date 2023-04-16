import React from "react";
import { useWeather } from "../../context/WeatherContext";
import Day from "../Day";
import "./style.scss";

const WeatherMenu = () => {
  const { weather } = useWeather(); // Context state


  return (
    <div className="card-container">
      {weather&& weather.map((item, index) => <Day item={item} key={index} />)}
    </div>
  );
};

export default WeatherMenu;
