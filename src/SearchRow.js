import React from "react";
import "./SearchRow.css";

export default function SearchRow({
  saveExampleCity,
  saveEnteredCityName,
  saveSubmittedCity,
}) {
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
            className="search-input form-control text-color-mostly-cloudy border-color-mostly-cloudy"
            onChange={saveEnteredCityName}
          />
          <button
            type="submit"
            className="text-color-mostly-cloudy"
            onClick={saveSubmittedCity}
          >
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
