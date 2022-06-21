import React from "react";
import CurrentTemperatureCol from "./CurrentTemperatureCol";
import CurrentDetailsCol from "./CurrentDetailsCol";

export default function CurrentWeatherRow() {
  return (
    <div className="CurrentWeatherRow line">
      <CurrentTemperatureCol />
      <CurrentDetailsCol />
      <div className="col current-weather-col">
        <img
          src={require("./weather-icons/04d.svg").default}
          alt=""
          className="current-weather-img"
        />
      </div>
    </div>
  );
}
