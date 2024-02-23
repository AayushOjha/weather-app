import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { IWeatherResponse } from "./interfaces";
import { Result } from "./components/Result";

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherResponse | null>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <div className="page">
        <SearchBar
          setWeatherData={setWeatherData}
          setIsLoading={setIsLoading}
        />
        <Result weatherData={weatherData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
