import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";


export const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState({
    id: 1,
    name: "Adana",
    latitude: "37.0000",
    longitude: "35.3213",
    population: 2183167,
    region: "Akdeniz",
  });
  const [weather, setWeather] = useState(null);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const values = {
    weather,
    setWeather,
    city,
    setCity,
    days
  };

  

  const key = "fa7589454756fe60987dd083614c101c";
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&units=metric&lang=tr&appid=${key}`
        );
        setWeather(response.data.daily);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
