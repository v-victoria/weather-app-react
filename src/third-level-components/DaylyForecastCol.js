import React, { useContext } from "react";
import WeatherIcon from "../other-components-and-functions/WeatherIcon";
import { temperatureConversion } from "../other-components-and-functions/temperatureConversion";
import { UnitsContext } from "../providers/UnitsProvider";

import "./DaylyForecastCol.css";

export default function DaylyForecastCol(props) {
  const { units } = useContext(UnitsContext);

  return (
    <div className="DaylyForecastCol col">
      <div className="line week-day">{props.dayOfWeek}</div>
      <div className="line week-temperature">
        {temperatureConversion(units, props.maxTemp)}° /{" "}
        {temperatureConversion(units, props.minTemp)}°
      </div>
      <div className="line">
        <WeatherIcon icon={props.icon} forecast={true} />
      </div>
    </div>
  );
}
