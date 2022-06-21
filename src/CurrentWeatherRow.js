import React from "react";
import CurrentTemperatureCol from "./CurrentTemperatureCol";
import CurrentDetailsCol from "./CurrentDetailsCol";
import CurrentWeatherIcon from "./CurrentWeatherIcon";

export default function CurrentWeatherRow(props) {
  if (props.weatherData !== null) {
    return (
      <div className="CurrentWeatherRow line">
        <CurrentTemperatureCol weatherData={props.weatherData} />
        <CurrentDetailsCol weatherData={props.weatherData} />
        <CurrentWeatherIcon weatherData={props.weatherData} />
      </div>
    );
  } else {
    return <div className="CurrentWeatherRow line" />;
  }
}
