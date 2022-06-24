import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function UnitSwitch(props) {
  const { theme } = useContext(ThemeContext);

  if (props.status === "active") {
    return (
      <span
        className={"select-degree " + theme.textColor + " " + theme.degreeColor}
      >
        {props.value}
      </span>
    );
  } else {
    return (
      <span className={"not-select-degree " + theme.degreeColor}>
        {props.value}
      </span>
    );
  }
}
