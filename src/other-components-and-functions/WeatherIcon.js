import React from "react";

export default function WeatherIcon(props) {
  function importAll(r) {
    let icons = {};
    r.keys().map((item) => {
      let iconName = item.replace("./", "");
      iconName = iconName.replace(".svg", "");
      icons[iconName] = r(item);
      return true;
    });

    return icons;
  }

  const icons = importAll(
    require.context("../weather-icons", false, /\.(svg)$/)
  );

  if (props.forecast) {
    return (
      <img
        src={icons[props.icon]}
        alt={props.description}
        className="WeatherIcon week-weather-img"
      />
    );
  } else {
    return (
      <img
        src={icons[props.icon]}
        alt={props.description}
        className="WeatherIcon"
      />
    );
  }
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
