import React, { useState, useContext } from "react";
import "./CurrentTemperatureCol.css";
import TemperatureConversion from "../other-components-and-functions/TemperatureConversion";
import UnitSwitch from "../other-components-and-functions/UnitSwitch";
import { UnitsContext } from "../providers/UnitsProvider";

export default function CurrentTemperatureCol(props) {
  const { units, setUnits } = useContext(UnitsContext);

  const [metricStatus, setMetricStatus] = useState("active");
  const [imperialStatus, setImperialStatus] = useState("non");

  function setMetric(event) {
    event.preventDefault();
    setMetricStatus("active");
    setImperialStatus("non");
    setUnits("metric");
  }

  function setImperial(event) {
    event.preventDefault();
    setMetricStatus("non");
    setImperialStatus("active");
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
          <a href="/#" onClick={setMetric}>
            <UnitSwitch status={metricStatus} value="℃" />
          </a>
          <hr />
          <a href="/#" onClick={setImperial}>
            <UnitSwitch status={imperialStatus} value="℉" />
          </a>
        </div>
      </div>
    </div>
  );
}
