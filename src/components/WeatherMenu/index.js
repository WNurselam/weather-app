import React from "react";
import { useWeather } from "../../context/WeatherContext";

const WeatherMenu = () => {
  const { weather, city } = useWeather();
 
  console.log(weather);
  return <div></div>;
};

export default WeatherMenu;
