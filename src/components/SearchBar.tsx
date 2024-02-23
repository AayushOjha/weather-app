import { Dispatch, SetStateAction, useState } from "react";
import { weatherApi } from "../services/api/weatherApi";
import { IWeatherResponse } from "../interfaces";

type Props = {
  setWeatherData: Dispatch<SetStateAction<IWeatherResponse | null | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setIsLoading, setWeatherData }: Props) => {
  const [term, setTerm] = useState("");

  return (
    <>
      <div className="input-box">
        <input
          type="search"
          className="input"
          placeholder="Enter city"
          value={term}
          onChange={({ target: { value } }) => {
            setTerm(value || "");
          }}
        />
        <button
          className="submit-btn"
          onClick={() => {
            setIsLoading(true);
            weatherApi
              .fetchCityWeather(term)
              .then(({ data }) => {
                setWeatherData(data);
              })
              .catch((err) => {
                setWeatherData(null);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export { SearchBar };
