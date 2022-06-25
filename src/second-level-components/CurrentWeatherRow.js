import React from "react";
import "./CurrentWeatherRow.css";
import CurrentTemperatureCol from "../third-level-components/CurrentTemperatureCol";
import CurrentDetailsCol from "../third-level-components/CurrentDetailsCol";
import WeatherIcon from "../other-components-and-functions/WeatherIcon";

export default function CurrentWeatherRow(props) {
  return (
    <div className="CurrentWeatherRow line">
      <CurrentTemperatureCol weatherData={props.weatherData} />
      <CurrentDetailsCol weatherData={props.weatherData} />
      <div className="col current-weather-col">
        <WeatherIcon
          icon={props.weatherData.icon}
          description={props.weatherData.description}
        />
      </div>
    </div>
  );
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
