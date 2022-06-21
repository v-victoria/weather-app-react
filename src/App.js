import WeatherAppBlock from "./WeatherAppBlock";

import "./App.css";
import "./themes.css";

function App() {
  return (
    <div className="App">
      <WeatherAppBlock />
      <div className="open-source-code-link">
        <a
          href="https://github.com/v-victoria/Weather-App-SheCodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        , by Victoria Martynenko
      </div>
    </div>
  );
}

export default App;
