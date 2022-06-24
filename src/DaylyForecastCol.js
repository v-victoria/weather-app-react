import React, { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";
import { UnitsContext } from "./TemperatureProvider";

import "./DaylyForecastCol.css";

export default function DaylyForecastCol(props) {
  const { units } = useContext(UnitsContext);

  return (
    <div className="DaylyForecastCol col">
      <div className="line week-day">{props.dayOfWeek}</div>
      <div className="line week-temperature">
        <span className="temp-value">
          <TemperatureConversion temperature={props.maxTemp} units={units} />
        </span>
        ° /
        <span className="temp-value">
          {" "}
          <TemperatureConversion temperature={props.minTemp} units={units} />
        </span>
        °
      </div>
      <div className="line">
        <WeatherIcon icon={props.icon} forecast={true} />
      </div>
    </div>
  );
}
