import axios, { AxiosPromise } from "axios";
import { IWeatherResponse } from "../../interfaces";

const fetchCityWeather = (city: string): AxiosPromise<IWeatherResponse> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city
      .toLocaleLowerCase()
      .trim()}&appid=${process.env.REACT_APP_API_KEY}`
  );
};

const weatherApi = { fetchCityWeather };
export { weatherApi };
