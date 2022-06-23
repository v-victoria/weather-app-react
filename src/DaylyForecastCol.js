import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DaylyForecastCol.css";

export default function DaylyForecastCol(props) {
  return (
    <div className="DaylyForecastCol col">
      <div className="line week-day">{props.dayOfWeek}</div>
      <div className="line week-temperature">
        <span className="temp-value">{props.maxTemp}</span>° /
        <span className="temp-value">{props.minTemp}</span>°
      </div>
      <div className="line">
        <WeatherIcon icon={props.icon} forecast={true} />
      </div>
    </div>
  );
}
