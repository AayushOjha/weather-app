import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { IWeatherResponse } from "./interfaces";
import { Result } from "./components/Result";
import { localStorageHelper } from "./services/helpers/localStoreage";

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherResponse | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const lastWeather = localStorageHelper.getWeather();
    if (lastWeather) {
      setWeatherData(lastWeather);
    }
  }, []);

  return (
    <div className="App">
      <div className="page">
        <h1 className="app-title">Weather App</h1>
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
