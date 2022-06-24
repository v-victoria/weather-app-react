export function getCurrentTheme(item) {
  let colorThemeList = [
    {
      textColor: "text-color-clear",
      degreeColor: "degree-color-clear-hover",
      currentLocationRow: "current-location-row-clear",
      backgroundColor: "background-color-clear",
      borderColor: "border-color-clear",
    },
    {
      textColor: "text-color-mostly-cloudy",
      degreeColor: "degree-color-mostly-cloudy-hover",
      currentLocationRow: "current-location-row-mostly-cloudy",
      backgroundColor: "background-color-mostly-cloudy",
      borderColor: "border-color-mostly-cloudy",
    },
    {
      textColor: "text-color-cloudy",
      degreeColor: "degree-color-cloudy-hover",
      currentLocationRow: "current-location-row-cloudy",
      backgroundColor: "background-color-cloudy",
      borderColor: "border-color-cloudy",
    },
    {
      textColor: "text-color-night",
      degreeColor: "degree-color-night-hover",
      currentLocationRow: "current-location-row-night",
      backgroundColor: "background-color-night",
      borderColor: "border-color-night",
    },
  ];
  return colorThemeList[item];
}
