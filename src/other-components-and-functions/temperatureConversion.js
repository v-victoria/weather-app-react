export function temperatureConversion(units, temp) {
  function celsiusToFahrenheit() {
    return Math.round((temp * 9) / 5 + 32);
  }

  let temperature = temp;

  if (units === "metric") {
    return temperature;
  } else {
    temperature = celsiusToFahrenheit();
    return temperature;
  }
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
