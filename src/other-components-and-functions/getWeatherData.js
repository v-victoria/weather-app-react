export function getWeatherData(response) {
  let weatherData = {
    temperature: Math.round(response.data.main.temp),
    maxTemperature: Math.round(response.data.main.temp_max),
    minTemperature: Math.round(response.data.main.temp_min),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
  };
  return weatherData;
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
