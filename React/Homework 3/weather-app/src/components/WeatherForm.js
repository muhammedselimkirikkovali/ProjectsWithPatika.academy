import React from "react";
import Select from "react-select";
import cities from "./Cities";
import { useWeather } from "../Context/WeatherContext";

const WeatherForm = () => {
  const { handleCitySelect } = useWeather();

  const handleCityChange = (e) => {
    handleCitySelect(e.value);
  };

  return (
    <div className="form">
      <Select onChange={handleCityChange} options={cities} />
    </div>
  );
};

export default WeatherForm;
