import React from "react";
import "./SearchRow.css";

export default function SearchRow() {
  return (
    <div className="SearchRow line">
      <div className="col city-example-col">
        <span className="city-example">New York</span>
        <span className="city-example">Pekin</span>
        <span className="city-example">Sydney</span>
      </div>
      <div className="col">
        <form>
          <input
            type="search"
            placeholder="Search City"
            className="search-input form-control text-color-mostly-cloudy border-color-mostly-cloudy"
          />
          <button className="text-color-mostly-cloudy">
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
