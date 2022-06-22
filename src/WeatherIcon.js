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
    require.context("./weather-icons", false, /\.(svg)$/)
  );

  return <img src={icons[props.icon]} alt="" className="WeatherIcon" />;
}
