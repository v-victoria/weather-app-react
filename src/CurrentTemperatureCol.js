import React from "react";
import "./CurrentTemperatureCol.css";

export default function CurrentTemperatureCol(props) {
  return (
    <div className="CurrentTemperatureCol col">
      <div className="line description">{props.weatherData.description}</div>
      <div className="line current-temperature">
        <div className="col tempeture temp-value">
          {props.weatherData.temperature}
        </div>
        <div className="col degree">
          <a
            href="/#"
            className="select-degree text-color-mostly-cloudy degree-color-mostly-cloudy-hover"
          >
            ℃
          </a>
          <hr />
          <a
            href="/#"
            className="not-select-degree degree-color-mostly-cloudy-hover"
          >
            ℉
          </a>
        </div>
      </div>
    </div>
  );
}
