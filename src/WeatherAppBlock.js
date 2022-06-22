import React, { useState } from "react";
import axios from "axios";

import CurrentLocationRow from "./CurrentLocationRow";
import CurrentWeatherRow from "./CurrentWeatherRow";
import DaylyForecastRow from "./DaylyForecastRow";

import "./SearchRow.css";

export default function WeatherAppBlock() {
  let apiKey = "294b1233d0859b30eceddba0fee44100";
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  if (city === null) {
    setCity("London");
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
    axios.get(urlAPI).then(showWeather);
  }

  function showWeather(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });

    setLocationData({
      cityName: response.data.name,
      country: response.data.sys.country,
      timezone: response.data.timezone,
    });
  }

  function saveEnteredCityName(event) {
    setCity(event.target.value);
  }

  function findSubmittedCity(event) {
    event.preventDefault();
    getAPIcall();
  }

  function getAPIcall() {
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(urlAPI);
    axios.get(urlAPI).then(showWeather);
  }
  return (
    <div className="WeatherAppBlock main-background text-color-mostly-cloudy background-color-mostly-cloudy">
      <CurrentLocationRow locationData={locationData} />
      <CurrentWeatherRow weatherData={weatherData} />
      <DaylyForecastRow />

      <div className="SearchRow line">
        <div className="col city-example-col">
          <span className="city-example">New York</span>
          <span className="city-example">Pekin</span>
          <span className="city-example">Sydney</span>
        </div>
        <div className="col">
          <form onSubmit={findSubmittedCity}>
            <input
              type="search"
              placeholder="Search City"
              className="search-input form-control text-color-mostly-cloudy border-color-mostly-cloudy"
              onChange={saveEnteredCityName}
            />
            <button
              type="submit"
              className="text-color-mostly-cloudy"
              onClick={findSubmittedCity}
            >
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
