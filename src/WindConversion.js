export default function WindConversion(props) {
  function windLenghtCheck(windValue) {
    let wind = windValue;
    wind = wind.toFixed(1);

    if (wind.length > 3) {
      wind = Math.round(wind);
    }

    return wind;
  }

  if (props.units === "metrics") {
    return `${windLenghtCheck(props.wind * 3.6)} km/h`;
  } else {
    return `${windLenghtCheck(props.wind * 2.3)} mi/h`;
  }
}
