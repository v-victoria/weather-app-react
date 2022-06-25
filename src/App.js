import React from "react";
import WeatherAppBlock from "./WeatherAppBlock";
import ThemeProvider from "./providers/ThemeProvider";

import "./App.css";
import "./themes.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <WeatherAppBlock />
        <div className="open-source-code-link">
          <a
            href="https://github.com/v-victoria/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Victoria Martynenko
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
