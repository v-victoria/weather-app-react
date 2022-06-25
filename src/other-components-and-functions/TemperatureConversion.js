export default function TemperatureConversion(props) {
  function celsiusToFahrenheit() {
    return Math.round((props.temperature * 9) / 5 + 32);
  }

  let temperature = props.temperature;

  if (props.units === "metric") {
    return temperature;
  } else {
    temperature = celsiusToFahrenheit();
    return temperature;
  }
}
