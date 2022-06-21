import React from "react";
import DaylyForecastCol from "./DaylyForecastCol";

export default function DaylyForecastRow() {
  return (
    <div className="DaylyForecastRow line">
      <DaylyForecastCol dayOfWeek="Sat. 18" maxTemp={16} minTemp={8} />
      <DaylyForecastCol dayOfWeek="Sun. 19" maxTemp={16} minTemp={8} />
      <DaylyForecastCol dayOfWeek="Mon. 20" maxTemp={20} minTemp={6} />
      <DaylyForecastCol dayOfWeek="Tue. 21" maxTemp={20} minTemp={8} />
      <DaylyForecastCol dayOfWeek="Wed. 22" maxTemp={18} minTemp={13} />
    </div>
  );
}
