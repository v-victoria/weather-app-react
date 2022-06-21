import React from "react";
import "./DaylyForecastCol.css";

export default function DaylyForecastCol({ dayOfWeek, maxTemp, minTemp }) {
  return (
    <div className="DaylyForecastCol col">
      <div className="line week-day">{dayOfWeek}</div>
      <div className="line week-temperature">
        <span className="temp-value">{maxTemp}</span>° /
        <span className="temp-value">{minTemp}</span>°
      </div>
      <div className="line">
        <img
          src={require("./weather-icons/02d.svg").default}
          alt=""
          className="week-weather-img"
        />
      </div>
    </div>
  );
}
