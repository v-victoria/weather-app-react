import { getCurrentTheme } from "./getCurrentTheme";

export function setCurrentTheme(imgNumber) {
  // if true -> set up Clear theme
  if (imgNumber === "01d") {
    return getCurrentTheme(0);
  }

  // if true -> set up Mostly Cloudy theme
  if (
    imgNumber === "02d" ||
    imgNumber === "04d" ||
    imgNumber === "10d" ||
    imgNumber === "50d"
  ) {
    return getCurrentTheme(1);
  }

  // if true -> set up Cloudy theme
  if (
    imgNumber === "03d" ||
    imgNumber === "09d" ||
    imgNumber === "11d" ||
    imgNumber === "13d"
  ) {
    return getCurrentTheme(2);
  }

  // if true -> set up Night theme
  if (imgNumber.slice(2) === "n") {
    return getCurrentTheme(3);
  }
}
