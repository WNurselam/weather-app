import React from "react";
import { useWeather } from "../../context/WeatherContext";
import Day from "../Day";
import "./style.scss";

const WeatherMenu = () => {
  const { weather } = useWeather(); // Context state

  // take 5 days
  const weatherDay = weather.slice(0,5); 

  return (
    <div className="card-container">
      {weatherDay&& weatherDay.map((item, index) => <Day item={item} key={index} />)}
    </div>
  );
};

export default WeatherMenu;
