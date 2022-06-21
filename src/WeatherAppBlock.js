import React from "react";
import CurrentLocationRow from "./CurrentLocationRow";
import CurrentWeatherRow from "./CurrentWeatherRow";
import DaylyForecastRow from "./DaylyForecastRow";
import SearchRow from "./SearchRow";

export default function WeatherAppBlock() {
  return (
    <div className="WeatherAppBlock main-background text-color-mostly-cloudy background-color-mostly-cloudy">
      <CurrentLocationRow />
      <CurrentWeatherRow />
      <DaylyForecastRow />
      <SearchRow />
    </div>
  );
}
