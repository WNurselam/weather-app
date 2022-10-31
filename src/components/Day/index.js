import React from "react";
import { useWeather } from "../../context/WeatherContext";

const Day = ({ item }) => {
  const { days } = useWeather();


 
  console.log(item);


  return (
    <div className="card">  
      <div className="day-title">{days[new Date(item.dt * 1000).getDay()]}</div>
      <div>{item.weather[0].main}</div>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
      />
      <div>Min:{Math.round(item.temp.min)}°C</div>
      <div>Max:{Math.round(item.temp.max)}°C</div>
    </div>
  );
};

export default Day;
