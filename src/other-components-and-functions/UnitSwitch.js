import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function UnitSwitch(props) {
  const { theme } = useContext(ThemeContext);

  if (props.status === "active") {
    return (
      <span
        className={
          "UnitSwitch select-degree " +
          theme.textColor +
          " " +
          theme.degreeColor
        }
      >
        {props.value}
      </span>
    );
  } else {
    return (
      <span className={"UnitSwitch not-select-degree " + theme.degreeColor}>
        {props.value}
      </span>
    );
  }
}
/* Free to use animated SVG weather icons. Handcrafted by [Bas Milius](https://bas.dev). */
