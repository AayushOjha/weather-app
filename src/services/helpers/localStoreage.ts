import { IWeatherResponse } from "../../interfaces";

const setWeather = (_data: IWeatherResponse) => {
  const data = JSON.stringify(_data);
  localStorage.setItem("lastCityData", data);
};

const getWeather = () => {
  const result = localStorage.getItem("lastCityData");
  if (result) {
    return JSON.parse(result);
  } else {
    return null;
  }
};

export const localStorageHelper = { setWeather, getWeather };
