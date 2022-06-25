export function getForecastWeather(response) {
  let weekDays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  let dailyForecastList = [];
  let dayOfWeek = new Date();

  let hours = dayOfWeek.getUTCHours() + response.data.timezone_offset / 3600;

  if (hours < 0) {
    dayOfWeek = new Date(dayOfWeek.setDate(dayOfWeek.getDate() - 1));
  }
  if (hours >= 24) {
    dayOfWeek = new Date(dayOfWeek.setDate(dayOfWeek.getDate() + 1));
  }

  for (let i = 0; i < 5; i++) {
    dayOfWeek = new Date(dayOfWeek.setDate(dayOfWeek.getDate() + 1));

    let date = dayOfWeek.getDate();

    if (date < 10) {
      date = "0" + date;
    }

    dailyForecastList[i] = {
      date: `${weekDays[dayOfWeek.getDay()]} ${date}`,
      dayTemp: Math.round(response.data.daily[i + 1].temp.max),
      nightTemp: Math.round(response.data.daily[i + 1].temp.min),
      description: response.data.daily[i + 1].weather[0].icon,
    };
  }
  return dailyForecastList;
}
