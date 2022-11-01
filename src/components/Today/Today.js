import React from "react";
import { useWeather } from "../../context/WeatherContext";

const Today = () => {
  const { today, city } = useWeather();
  console.log(today);
  return (
    <div className="today-container">
      <div>{city.name}</div>
      <div>
      <span>{today?.weather?.[0]?.main}</span>
      <img
       src={`https://openweathermap.org/img/wn/${today?.weather?.[0]?.icon}@4x.png`}
        alt=""
      />
      </div>
    </div>
  );
};

export default Today;
