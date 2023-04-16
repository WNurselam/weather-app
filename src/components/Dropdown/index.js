import React from "react";
import cities from "../../cities_of_turkey.json";  
import { useWeather } from "../../context/WeatherContext";

const Dropdown = () => {
  const { setCity } = useWeather();

  //Is the json we get the cities of Turkey and the city we choose the same?
  const handleChange = (e) => {
    const selectCity = cities.find((city) => city.name === e.target.value);
    setCity(selectCity);
  };
  return (
    <select onChange={handleChange}> 
      {cities.map((city) => {
        return (
          <option value={city.name} key={city.id}>
            {city.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
