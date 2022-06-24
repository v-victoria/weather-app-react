import React, { useState } from "react";

export const UnitsContext = React.createContext();

export default function TemperatureProvider({ children }) {
  const [units, setUnits] = useState("metrics");
  const value = {
    units,
    setUnits,
  };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}
