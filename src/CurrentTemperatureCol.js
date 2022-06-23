import React, { useState } from "react";
import "./CurrentTemperatureCol.css";
import TemperatureConversion from "./TemperatureConversion";

export default function CurrentTemperatureCol(props) {
  const [units, setUnits] = useState("metrics");

  function setMetrics() {
    setUnits("metrics");
  }

  function setImperial() {
    setUnits("imperial");
  }

  return (
    <div className="CurrentTemperatureCol col">
      <div className="line description">{props.weatherData.description}</div>
      <div className="line current-temperature">
        <div className="col tempeture temp-value">
          <TemperatureConversion
            temperature={props.weatherData.temperature}
            units={units}
          />
        </div>
        <div className="col degree">
          <a
            href="/#"
            className="select-degree text-color-mostly-cloudy degree-color-mostly-cloudy-hover"
            onClick={setMetrics}
          >
            ℃
          </a>
          <hr />
          <a
            href="/#"
            className="not-select-degree degree-color-mostly-cloudy-hover"
            onClick={setImperial}
          >
            ℉
          </a>
        </div>
      </div>
    </div>
  );
}
