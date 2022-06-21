import React from "react";

export default function CurrentWeatherIcon(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      let iconName = item.replace("./", "");
      iconName = iconName.replace(".svg", "");
      images[iconName] = r(item);
    });

    return images;
  }

  const images = importAll(
    require.context("./weather-icons", false, /\.(svg)$/)
  );

  return (
    <div className="col current-weather-col">
      <img
        src={images[props.weatherData.iconUrl]}
        alt=""
        className="current-weather-img"
      />
    </div>
  );
}
