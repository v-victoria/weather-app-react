import React from "react";

export default function CurrentWeatherIcon(props) {
  function importAll(r) {
    let icons = {};
    r.keys().map((item) => {
      let iconName = item.replace("./", "");
      iconName = iconName.replace(".svg", "");
      icons[iconName] = r(item);
      return iconName;
    });

    return icons;
  }

  const icons = importAll(
    require.context("./weather-icons", false, /\.(svg)$/)
  );

  return (
    <div className="col current-weather-col">
      <img
        src={icons[props.weatherData.iconUrl]}
        alt=""
        className="current-weather-img"
      />
    </div>
  );
}
