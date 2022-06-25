import React, { useState } from "react";

export const UnitsContext = React.createContext();

export default function TemperatureProvider({ children }) {
  const [units, setUnits] = useState("metric");
  const value = {
    units,
    setUnits,
  };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
