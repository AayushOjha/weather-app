import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { IWeatherResponse } from "./interfaces";
import { Result } from "./components/Result";
import { localStorageHelper } from "./services/helpers/localStoreage";
import { getTheme } from "./services/helpers/getTheme";

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherResponse | null>();
  const [theme, setTheme] = useState(getTheme({ type: "default" }));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const lastWeather = localStorageHelper.getWeather();
    if (lastWeather) {
      setWeatherData(lastWeather);
      setTheme(getTheme({ type: lastWeather.weather[0].main }));
      console.log(`set data via localStorage: ${lastWeather.weather[0].main}`);
    }
  }, []);

  return (
    <div className={`App ${theme.appClass}-class default-class`}>
      <div className="page">
        <SearchBar
          setWeatherData={setWeatherData}
          setIsLoading={setIsLoading}
          setTheme={setTheme}
          theme={theme}
        />
        <Result weatherData={weatherData} isLoading={isLoading} theme={theme} />
      </div>
    </div>
  );
}

export default App;
