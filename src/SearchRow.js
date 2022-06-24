import React, { useContext } from "react";
import "./SearchRow.css";
import { ThemeContext } from "./ThemeProvider";

export default function SearchRow({
  saveExampleCity,
  saveEnteredCityName,
  saveSubmittedCity,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="SearchRow line">
      <div className="col city-example-col">
        <span className="city-example" onClick={saveExampleCity}>
          New York
        </span>
        <span className="city-example" onClick={saveExampleCity}>
          Pekin
        </span>
        <span className="city-example" onClick={saveExampleCity}>
          Sydney
        </span>
      </div>
      <div className="col">
        <form onSubmit={saveSubmittedCity}>
          <input
            type="search"
            placeholder="Search City"
            className={
              "search-input form-control " +
              theme.textColor +
              " " +
              theme.borderColor
            }
            onChange={saveEnteredCityName}
          />
          <button
            type="submit"
            className={theme.textColor}
            onClick={saveSubmittedCity}
          >
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
