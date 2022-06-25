import React, { useContext } from "react";
import { temperatureConversion } from "../other-components-and-functions/temperatureConversion";
import { windConversion } from "../other-components-and-functions/windConversion";
import { UnitsContext } from "../providers/UnitsProvider";

import "./CurrentDetailsCol.css";

export default function CurrentDetailsCol(props) {
  const { units } = useContext(UnitsContext);

  return (
    <div className="CurrentDetailsCol col">
      <div className="line current-weather-details">
        Day: {temperatureConversion(units, props.weatherData.maxTemperature)}°
      </div>
      <div className="line current-weather-details">
        Night: {temperatureConversion(units, props.weatherData.minTemperature)}°
      </div>
      <div className="line current-weather-details-space">
        Humidity: {props.weatherData.humidity}%
      </div>
      <div className="line current-weather-details">
        Wind: {windConversion(units, props.weatherData.wind)}
      </div>
    </div>
  );
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
