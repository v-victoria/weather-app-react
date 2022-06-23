import React, { useState, useEffect } from "react";
import axios from "axios";

import CurrentLocationRow from "./CurrentLocationRow";
import CurrentWeatherRow from "./CurrentWeatherRow";
import DaylyForecastRow from "./DaylyForecastRow";

import SearchRow from "./SearchRow";

export default function WeatherAppBlock(props) {
  const [inputCity, setInputCity] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    let apiKey = "294b1233d0859b30eceddba0fee44100";
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlAPI).then(showWeather);
  }, [city]);

  function showWeather(response) {
    console.log(response);
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

  if (weatherData !== null) {
    return (
      <div className="WeatherAppBlock main-background text-color-mostly-cloudy background-color-mostly-cloudy">
        <CurrentLocationRow locationData={locationData} />
        <CurrentWeatherRow weatherData={weatherData} />
        <DaylyForecastRow />
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
