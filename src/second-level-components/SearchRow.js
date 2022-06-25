import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./SearchRow.css";
import { ThemeContext } from "../providers/ThemeProvider";
import { getForecastWeather } from "../other-components-and-functions/getForecastWeather";
import { getWeatherData } from "../other-components-and-functions/getWeatherData";
import { fullCountryName } from "../other-components-and-functions/fullCountryName";
import { setCurrentTheme } from "../other-components-and-functions/setCurrentTheme";

export default function SearchRow({
  setWeatherData,
  setLocationData,
  setDailyForecastList,
  defaultCity,
}) {
  const { theme, setTheme } = useContext(ThemeContext);

  const [inputCity, setInputCity] = useState(null);
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    function setCurrentWeatherAndLocation(response) {
      setTheme(setCurrentTheme(response.data.weather[0].icon));
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
  }, [city, setTheme, setWeatherData, setLocationData, setDailyForecastList]);

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

  return (
    <div className="SearchRow line">
      <div className="col city-example-col">
        <span className="city-example" onClick={saveExampleCity}>
          New York
        </span>
        <span className="city-example" onClick={saveExampleCity}>
          Pekin
        </span>
        <span className="city-example" onClick={saveExampleCity}>
          Sydney
        </span>
      </div>
      <div className="col">
        <form onSubmit={saveSubmittedCity}>
          <input
            type="search"
            placeholder="Search City"
            className={
              "search-input form-control " +
              theme.textColor +
              " " +
              theme.borderColor
            }
            onChange={saveEnteredCityName}
          />
          <button
            type="submit"
            className={theme.textColor}
            onClick={saveSubmittedCity}
          >
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
