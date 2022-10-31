import React from "react";
import cities from "../../cities_of_turkey.json";
import { useWeather } from "../../context/WeatherContext";

const Dropdown = () => {
  const { setCity} = useWeather();

  const handleChange = (e) => {
    const selectCity = cities.find((city) => city.name === e.target.value);
    setCity(selectCity);
  };
  return (
    <div>
      <select onChange={handleChange}>
        {cities.map((city) => {
          return (
            <option value={city.name} key={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
