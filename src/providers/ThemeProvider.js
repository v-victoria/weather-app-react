import React, { useState } from "react";
import { getCurrentTheme } from "../other-components-and-functions/getCurrentTheme";

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getCurrentTheme(0));
  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
