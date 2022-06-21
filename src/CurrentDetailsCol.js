import React from "react";
import "./CurrentDetailsCol.css";

export default function CurrentDetailsCol(props) {
  function windLenghtCheck() {
    let wind = props.weatherData.wind;
    wind = wind.toFixed(1);
    if (wind.length > 3) {
      wind = Math.round(wind);
    }

    return wind;
  }

  return (
    <div className="CurrentDetailsCol col">
      <div className="line current-weather-details">
        Day: {props.weatherData.maxTemperature}°
      </div>
      <div className="line current-weather-details">
        Night: {props.weatherData.minTemperature}°
      </div>
      <div className="line current-weather-details-space">
        Humidity: {props.weatherData.humidity}%
      </div>
      <div className="line current-weather-details">
        Wind: {windLenghtCheck()} km/h
      </div>
    </div>
  );
}
