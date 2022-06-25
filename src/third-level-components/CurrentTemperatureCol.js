import React, { useState, useContext } from "react";
import "./CurrentTemperatureCol.css";
import { temperatureConversion } from "../other-components-and-functions/temperatureConversion";
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
      <div className="line">
        <div className="col tempeture">
          {temperatureConversion(units, props.weatherData.temperature)}
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
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
