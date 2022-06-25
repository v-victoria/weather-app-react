export function windConversion(units, wind) {
  function windLenghtCheck(windValue) {
    let wind = windValue;
    wind = wind.toFixed(1);

    if (wind.length > 3) {
      wind = Math.round(wind);
    }

    return wind;
  }

  if (units === "metric") {
    return `${windLenghtCheck(wind * 3.6)} km/h`;
  } else {
    return `${windLenghtCheck(wind * 2.3)} mi/h`;
  }
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
