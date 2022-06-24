import React, { useState, useContext } from "react";
import "./CurrentTemperatureCol.css";
import TemperatureConversion from "./TemperatureConversion";
import { UnitsContext } from "./TemperatureProvider";

export default function CurrentTemperatureCol(props) {
  const { units, setUnits } = useContext(UnitsContext);
  let selectClassNames =
    "select-degree text-color-mostly-cloudy degree-color-mostly-cloudy-hover";
  let notSelectClassNames =
    "not-select-degree degree-color-mostly-cloudy-hover";

  const [metricsClassNames, setMetricsClassNames] = useState(selectClassNames);
  const [imperialClassNames, setImperialClassNames] =
    useState(notSelectClassNames);

  function setMetrics(event) {
    event.preventDefault();
    setMetricsClassNames(selectClassNames);
    setImperialClassNames(notSelectClassNames);
    setUnits("metrics");
  }

  function setImperial(event) {
    event.preventDefault();
    setMetricsClassNames(notSelectClassNames);
    setImperialClassNames(selectClassNames);
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
          <a href="/#" className={metricsClassNames} onClick={setMetrics}>
            ℃
          </a>
          <hr />
          <a href="/#" className={imperialClassNames} onClick={setImperial}>
            ℉
          </a>
        </div>
      </div>
    </div>
  );
}
