import React from "react";
import "./CurrentLocationRow.css";

export default function CurrentLocationRow() {
  return (
    <div className="CurrentLocationRow line current-location-row-mostly-cloudy">
      <div className="col-1 current-location-icon">
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <div className="col-9 current-location-text">London, England, GB</div>
      <div className="col-2 time">16:00</div>
    </div>
  );
}
