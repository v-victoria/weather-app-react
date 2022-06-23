import React, { useState, useEffect } from "react";
import axios from "axios";

import CurrentLocationRow from "./CurrentLocationRow";
import CurrentWeatherRow from "./CurrentWeatherRow";
import DaylyForecastRow from "./DaylyForecastRow";
import { getForecastWeather } from "./getForecastWeather";
import { fullCountryName } from "./fullCountryName";

import SearchRow from "./SearchRow";

export default function WeatherAppBlock(props) {
  const [inputCity, setInputCity] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [dailyForecastList, setDailyForecastList] = useState(null);

  useEffect(() => {
    let apiKey = "294b1233d0859b30eceddba0fee44100";
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlAPI).then(setCurrentWeatherAndLocation);
  }, [city]);

  function setCurrentWeatherAndLocation(response) {
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
        <CurrentWeatherRow weatherData={weatherData} />
        <DaylyForecastRow dailyForecastList={dailyForecastList} />
        <SearchRow
          saveExampleCity={saveExampleCity}
          saveEnteredCityName={saveEnteredCityName}
          saveSubmittedCity={saveSubmittedCity}
        />
      </div>
    );
  } else {
    return (
      <div className="WeatherAppBlock main-background text-color-mostly-cloudy background-color-mostly-cloudy">
        <SearchRow
          saveExampleCity={saveExampleCity}
          saveEnteredCityName={saveEnteredCityName}
          saveSubmittedCity={saveSubmittedCity}
        />
      </div>
    );
  }
}
