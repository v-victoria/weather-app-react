import React from "react";
import DaylyForecastCol from "../third-level-components/DaylyForecastCol";

export default function DaylyForecastRow({ dailyForecastList }) {
  let daylyForecastRow = [];
  for (let i = 0; i < 5; i++) {
    daylyForecastRow[i] = (
      <DaylyForecastCol
        key={i}
        dayOfWeek={dailyForecastList[i].date}
        maxTemp={dailyForecastList[i].dayTemp}
        minTemp={dailyForecastList[i].nightTemp}
        icon={dailyForecastList[i].description}
      />
    );
  }

  return <div className="DaylyForecastRow line">{daylyForecastRow}</div>;
}
