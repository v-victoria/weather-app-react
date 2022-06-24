import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactLoading from "react-loading";
import CurrentLocationRow from "./CurrentLocationRow";
import CurrentWeatherRow from "./CurrentWeatherRow";
import DaylyForecastRow from "./DaylyForecastRow";
import TemperatureProvider from "./TemperatureProvider";
import { getForecastWeather } from "./getForecastWeather";
import { getWeatherData } from "./getWeatherData";
import { fullCountryName } from "./fullCountryName";

import SearchRow from "./SearchRow";

export default function WeatherAppBlock(props) {
  const [inputCity, setInputCity] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [dailyForecastList, setDailyForecastList] = useState(null);

  useEffect(() => {
    function setCurrentWeatherAndLocation(response) {
      setWeatherData(getWeatherData(response));
      setLocationData({
        cityName: response.data.name,
        country: fullCountryName(response.data.sys.country),
        timezone: response.data.timezone,
      });
      let apiKey = "294b1233d0859b30eceddba0fee44100";
      let lat = response.data.coord.lat;
      let lon = response.data.coord.lon;
      let apiUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
      axios.get(apiUrlCurrentWeather).then(setForecastWeather);
    }
    function setForecastWeather(response) {
      let list = getForecastWeather(response);
      setDailyForecastList(list);
    }
    let apiKey = "294b1233d0859b30eceddba0fee44100";
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlAPI).then(setCurrentWeatherAndLocation);
  }, [city]);

  function saveExampleCity(event) {
    setCity(event.target.innerHTML);
  }

  function saveEnteredCityName(event) {
    setInputCity(event.target.value);
  }

  function saveSubmittedCity(event) {
    event.preventDefault();
    setCity(inputCity);
  }

  if (
    weatherData !== null &&
    locationData !== null &&
    dailyForecastList !== null
  ) {
    return (
      <div className="WeatherAppBlock main-background text-color-mostly-cloudy background-color-mostly-cloudy">
        <CurrentLocationRow locationData={locationData} />
        <TemperatureProvider>
          <CurrentWeatherRow weatherData={weatherData} />
          <DaylyForecastRow dailyForecastList={dailyForecastList} />
        </TemperatureProvider>
        <SearchRow
          saveExampleCity={saveExampleCity}
          saveEnteredCityName={saveEnteredCityName}
          saveSubmittedCity={saveSubmittedCity}
        />
      </div>
    );
  } else {
    return (
      <div className="WeatherAppBlock d-flex flex-column justify-content-between main-background text-color-mostly-cloudy background-color-mostly-cloudy">
        <div className="align-self-center mt-auto mb-auto">
          <ReactLoading
            type="bubbles"
            color="#001d6e"
            height={"20vmin"}
            width={"20vmin"}
          />
        </div>
        <SearchRow
          saveExampleCity={saveExampleCity}
          saveEnteredCityName={saveEnteredCityName}
          saveSubmittedCity={saveSubmittedCity}
        />
      </div>
    );
  }
}
