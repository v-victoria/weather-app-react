import React, { useContext } from "react";
import "./CurrentLocationRow.css";
import { ThemeContext } from "./ThemeProvider";

export default function CurrentLocationRow(props) {
  const { theme } = useContext(ThemeContext);

  function updateCurrentTime() {
    let currentLocationDate = new Date();

    let minutes = currentLocationDate.getUTCMinutes();
    let hours =
      currentLocationDate.getUTCHours() + props.locationData.timezone / 3600;

    if (hours < 0) {
      hours = 24 + hours;
    }
    if (hours >= 24) {
      hours = hours - 24;
    }

    // Time adjustment if the time zone is not integer
    if (Number.isInteger(hours) === false) {
      minutes = minutes + 30;
      if (minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
      }
      hours = hours.toString().slice(0, -2);
    }

    if (hours.length === 1 || hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  function displayCity() {
    let cityName = props.locationData.cityName;
    let country = props.locationData.country;
    return `${cityName}, ${country}`;
  }

  return (
    <div className={"CurrentLocationRow line " + theme.currentLocationRow}>
      <div className="col-1 current-location-icon">
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <div className="col-9 current-location-text">{displayCity()}</div>
      <div className="col-2 time">{updateCurrentTime()}</div>
    </div>
  );
}
