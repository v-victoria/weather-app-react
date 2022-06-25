import React from "react";
import CurrentTemperatureCol from "../third-level-components/CurrentTemperatureCol";
import CurrentDetailsCol from "../third-level-components/CurrentDetailsCol";
import WeatherIcon from "../other-components-and-functions/WeatherIcon";

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
