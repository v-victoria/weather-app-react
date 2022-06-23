import React from "react";
import CurrentTemperatureCol from "./CurrentTemperatureCol";
import CurrentDetailsCol from "./CurrentDetailsCol";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeatherRow(props) {
  return (
    <div className="CurrentWeatherRow line">
      <CurrentTemperatureCol weatherData={props.weatherData} />
      <CurrentDetailsCol weatherData={props.weatherData} />
      <div className="col current-weather-col">
        <WeatherIcon icon={props.weatherData.icon} />
      </div>
    </div>
  );
}
