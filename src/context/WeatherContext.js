import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";


export const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState({
    id: 34,
    name: "İstanbul",
    latitude: "41.0053",
    longitude: "28.9770",
    population: 14657434,
    region: "Marmara",
  });
  const [weather, setWeather] = useState();

  const values = {
    weather,
    setWeather,
    city,
    setCity,
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
