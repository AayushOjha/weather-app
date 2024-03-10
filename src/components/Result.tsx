import { IWeatherResponse } from "../interfaces";
import { weatherIconUrl } from "../services/helpers/icon";
import { FaTemperatureLow } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { ITheme } from "../services/helpers/getTheme";

type Props = {
  weatherData: IWeatherResponse | null | undefined;
  isLoading: boolean;
  theme: ITheme;
};

const Result = ({ weatherData, isLoading, theme }: Props) => {
  if (isLoading) {
    return (
      <div>
        <div className="container circle-loader-container">
          <div className="circle-loader"></div>
        </div>
        <div className="center-phase">
          Hold tight, we're summoning weather details!
        </div>
      </div>
    );
  }
  if (weatherData === undefined) {
    return (
      <div className="center-phase">
        Ready for a forecast adventure? Enter a city to get started!
      </div>
    );
  } else if (weatherData === null) {
    return <div className="center-phase">city not found!</div>;
  } else {
    return (
      <div className="container container-col">
        <p className="center-phase city-name">{weatherData.name}</p>
        <img src={theme.icon} alt="weather icon" className="weather-icon" />
        <p className="weather-icon-text">{weatherData.weather[0].main}</p>
        <div className="container">
          <FaTemperatureLow color="white" size={25} />
          <div className="center-phase card-text">
            {(weatherData.main.temp - 273.15).toFixed(2)}
          </div>
        </div>
        <div className="container wind-humidity-container">
          <div className="container">
            <FaWind color="white" size={25} />
            <div className="center-phase card-text">
              {weatherData.wind.speed} | {weatherData.wind.deg} deg
            </div>
          </div>
          <div className="container">
            <WiHumidity color="white" size={28} />
            <div className="center-phase card-text">
              {weatherData.main.humidity}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { Result };
