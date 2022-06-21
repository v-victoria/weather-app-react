import React from "react";
import "./CurrentDetailsCol.css";

export default function CurrentDetailsCol() {
  return (
    <div className="CurrentDetailsCol col">
      <div className="line current-weather-details">
        Day: <span className="temp-value">13</span> °
      </div>
      <div className="line current-weather-details">
        Night: <span className="temp-value">5</span> °
      </div>
      <div className="line current-weather-details-space">Humidity: 53%</div>
      <div className="line current-weather-details">Wind: 13 km/h</div>
    </div>
  );
}
