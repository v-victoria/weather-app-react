import React, { useContext } from "react";
import TemperatureConversion from "../other-components-and-functions/TemperatureConversion";
import WindConversion from "../other-components-and-functions/WindConversion";
import { UnitsContext } from "../providers/UnitsProvider";

import "./CurrentDetailsCol.css";

export default function CurrentDetailsCol(props) {
  const { units } = useContext(UnitsContext);

  return (
    <div className="CurrentDetailsCol col">
      <div className="line current-weather-details">
        Day:{" "}
        <TemperatureConversion
          temperature={props.weatherData.maxTemperature}
          units={units}
        />
        °
      </div>
      <div className="line current-weather-details">
        Night:{" "}
        <TemperatureConversion
          temperature={props.weatherData.minTemperature}
          units={units}
        />
        °
      </div>
      <div className="line current-weather-details-space">
        Humidity: {props.weatherData.humidity}%
      </div>
      <div className="line current-weather-details">
        Wind: <WindConversion wind={props.weatherData.wind} units={units} />
      </div>
    </div>
  );
}