import React, { useState, useContext } from "react";

import ReactLoading from "react-loading";
import CurrentLocationRow from "./second-level-components/CurrentLocationRow";
import CurrentWeatherRow from "./second-level-components/CurrentWeatherRow";
import DaylyForecastRow from "./second-level-components/DaylyForecastRow";
import UnitsProvider from "./providers/UnitsProvider";

import { ThemeContext } from "./providers/ThemeProvider";

import SearchRow from "./second-level-components/SearchRow";

export default function WeatherAppBlock() {
  const { theme } = useContext(ThemeContext);

  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [dailyForecastList, setDailyForecastList] = useState(null);

  if (
    weatherData !== null &&
    locationData !== null &&
    dailyForecastList !== null
  ) {
    return (
      <div
        className={
          "WeatherAppBlock main-background " +
          theme.textColor +
          " " +
          theme.backgroundColor
        }
      >
        <CurrentLocationRow locationData={locationData} />
        <UnitsProvider>
          <CurrentWeatherRow weatherData={weatherData} />
          <DaylyForecastRow dailyForecastList={dailyForecastList} />
        </UnitsProvider>
        <SearchRow
          setWeatherData={setWeatherData}
          setLocationData={setLocationData}
          setDailyForecastList={setDailyForecastList}
          defaultCity="Berlin"
        />
      </div>
    );
  } else {
    return (
      <div
        className={
          "WeatherAppBlock d-flex flex-column justify-content-between main-background " +
          theme.textColor +
          " " +
          theme.backgroundColor
        }
      >
        <div className="align-self-center mt-auto mb-auto">
          <ReactLoading
            type="bubbles"
            color="#001d6e"
            height={"20vmin"}
            width={"20vmin"}
          />
        </div>
        <SearchRow
          setWeatherData={setWeatherData}
          setLocationData={setLocationData}
          setDailyForecastList={setDailyForecastList}
          defaultCity="Berlin"
        />
      </div>
    );
  }
}
