import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

const API_KEY = "0k1ZsjFxaIw8cXsG9xxDUE:7bhyYSAp7wmZn95V5oq2L8";

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySelect = async (selectedCity) => {
    setCity(selectedCity);
    const data = await getWeather(selectedCity);
    setWeatherData(data.result);
  };

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}&data.type=day`,
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
          },
        }
      );

      // console.log(response.data.result[0]);

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          "Hava durumu alınırken bir hata oluştu:",
          response.statusText
        );
        return null;
      }
    } catch (error) {
      console.error("Hava durumu alınırken bir hata oluştu:", error);
      return null;
    }
  };

  const contextValue = {
    city,
    weatherData,
    handleCitySelect,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
